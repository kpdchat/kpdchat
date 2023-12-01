import React, { useState, useRef, useEffect } from 'react';
import NoMemberBtn from './NoMemberBtn';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataForMessageForm, selectDataForMessages, selectMessagesLoader } from '../../../../store/selectors';
import { fetchPostMessage, fetchDeleteUserTyping, fetchPostUserTyping, stopClearForm, setUnSeenCount } from '../../../../store/actions/messageAction';
import FormEditMessage from './FormEditMessage';
import FormReplyMessage from './FormReplyMessage';
import useMessageSendForm from './useMessageSendForm';
import LoadingSendMess from './LoadingSendMess';

export default function MessageSendForm() {
    const { user, chat } = useSelector(selectDataForMessages);
    const { isClearForm, editMessage, replyMessage } = useSelector(selectDataForMessageForm);
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState('');
    const [previousText, setPreviousText] = useState('');
    const [error, setError] = useState(false)
    const { textValidation, updateMessage, postLongMessage, replyToMessage, t, } = useMessageSendForm(setError)
    const textareaRef = useRef();
    const dispatch = useDispatch();
    const isLoaderMessages = useSelector(selectMessagesLoader);

    const isMember = user.chats.find(el => el.id === chat.id);

    function onTextareaInput(e) {
        const value = e.target.value;
        if (!text) {
            textareaRef.current.style.height = '42px';
        }
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 0 + 'px';

        textValidation(value)
        setText(value);

        // Send or Delete data UserTyping
        if (!text) {
            setIsTyping(true);
            dispatch(fetchPostUserTyping(user.id, chat.id));
        } else if (value.trim() === '') {
            setIsTyping(false);
            dispatch(fetchDeleteUserTyping(user.id));
        }
        if ((editMessage?.id && text.length > 2000) || (replyMessage?.id && text.length > 2000)) {
            setError(true)
        }
        
    }

    // Submit on enter
    function onEnterPress(e) {
        if (e.keyCode === 13 && !e.shiftKey && !e.ctrlKey) {
            e.preventDefault();
            onFormSubmit(e);
        }
    }

    function onFormSubmit(e) {
        e.preventDefault();

        if (!text || !text.trim()) {
            setError(true);
            return;
        }

        if (error) {
            return;
        }
        setError(false);

        const date = Math.round(Date.now() / 1000);

        const data = {
            'chatId': chat.id,
            'userId': user.id,
            'text': text,
            'sentAt': date
        }

        if (editMessage.id) {
            updateMessage(editMessage, user, text);
            return;
        }

        if (text.length > 2000) {
            postLongMessage(text, data)
            textareaRef.current.style.height = 'auto';
            dispatch(fetchDeleteUserTyping(user.id));
            setIsTyping(false);
            setText('');
            setError(true);
            return;
        }

        if (replyMessage.id) {
            replyToMessage(data, replyMessage);
            return;
        }
        dispatch(setUnSeenCount(0))
        dispatch(fetchPostMessage(data));
        setText('');
        textareaRef.current.style.height = '42px';
        dispatch(fetchDeleteUserTyping(user.id));
        setIsTyping(false);
        setError(true);
    }

    useEffect(() => {
        if (editMessage.id) {
            setText(editMessage.text)
            setError(false)
            if (!isTyping) {
                dispatch(fetchPostUserTyping(user.id, chat.id));
                setIsTyping(true);
            }
            editMessage.text.length > 100 ? textareaRef.current.style.height = '60px' : textareaRef.current.style.height = 'auto';
        }
        // eslint-disable-next-line
    }, [editMessage.id, editMessage.text, dispatch])

    useEffect(() => {
        if (isClearForm) {
            if (isTyping) {
                setIsTyping(false);
                dispatch(fetchDeleteUserTyping(user.id));
            }
            textareaRef.current.style.height = '42px';
            setError(true)
            setText('')
            dispatch(stopClearForm())
        }
        if(!text) {
            textareaRef.current.style.height = '42px';
        }
        // eslint-disable-next-line
    }, [isClearForm, isTyping, dispatch, text])

    // Show UserTyping
    useEffect(() => {
        if (((text.length - previousText.length) > 5)
            || (text.length - previousText.length) < -5) {
            setIsTyping(true);
            setPreviousText(text);
            dispatch(fetchPostUserTyping(user.id, chat.id));
        }
        // eslint-disable-next-line
    }, [text, previousText, isTyping, dispatch]);

    return (
        <div className='messages__input-mes input-mes'>
            { editMessage?.id && <FormEditMessage editMessage={ editMessage } /> }
            { replyMessage?.id && <FormReplyMessage replyMessage={ replyMessage } /> }
            <form
                onSubmit={ onFormSubmit }
                className='input-mes__form'>

                { !isMember && <NoMemberBtn /> }

                <textarea
                    ref={ textareaRef }
                    rows='1'
                    onChange={ onTextareaInput }
                    onKeyDown={ onEnterPress }
                    value={ text }
                    className='text-inter-16-400 scroll-bar'
                    placeholder={ t('global.text-message') }
                />

                { isLoaderMessages
                    ? <LoadingSendMess />
                    : <button
                        className={error ? 'input-mes__button-disabled' : 'input-mes__button-active cursor-pointer'}
                        type='submit'
                        onClick={ onFormSubmit }>
                    </button>
                }
            </form>
        </div>
    )
}

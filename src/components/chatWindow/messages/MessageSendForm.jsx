import React, { useState, useRef } from 'react';
import NoMemberBtn from './NoMemberBtn';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {selectClearForm, selectDataForMessages, selectEditMessage, selectReplyMessage} from '../../../store/selectors';
import {fetchPostMessage, fetchDeleteUserTyping, fetchPostUserTyping, stopClearForm, fetchUpdateMessage, clearForm} from '../../../store/actions/messageAction';
import FormEditMessage from './mes-messages/FormEditMessage';
import { useEffect } from 'react';
import FormReplyMessage from './mes-messages/FormReplyMessage';

export default function MessageSendForm() {
    const { user, chat } = useSelector(selectDataForMessages);
    const editMessage = useSelector(selectEditMessage);
    const replyMessage = useSelector(selectReplyMessage);
    const isClearForm = useSelector(selectClearForm);
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState('');
    const { t } = useTranslation();
    const textareaRef = useRef();
    const dispatch = useDispatch();

    const isMember = user.chats.find(el => el.id === chat.id);

    // User Typing Data
    const userTypingData = {
        'userId': user.id,
        'chatId': chat.id
    }

    const userTypingDeleteData = {
        'userId': user.id
    }

    function onTextareaInput(e) {
        const value = e.target.value;

        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 0 + 'px';
        setText(value);

        // Send or Delete data UserTyping
        if (!text) {
            setIsTyping(true);
            dispatch(fetchPostUserTyping(userTypingData));
        } else if (value.trim() === '') {
            setIsTyping(false);
            dispatch(fetchDeleteUserTyping(userTypingDeleteData));
        }
    }

    function onEnterPress(e) {
        if (e.keyCode === 13 && !e.shiftKey && !e.ctrlKey) {
            e.preventDefault();
            onFormSubmit(e);
        }
    }

    function onFormSubmit(e) {
        e.preventDefault();

        if (!text || !text.trim()) {
            return;
        }

        const date = Math.round(Date.now() / 1000);

        const data = {
            'chatId': chat.id,
            'userId': user.id,
            'text': text,
            'sentAt': date
        }

        if (editMessage.id) {
            const editData = {
                "messageId": editMessage.id,
                "userId": user.id,
                "text": text
            }
            dispatch(fetchUpdateMessage(editData));
            return;
        }

        if (text.length > 2000) {
            const firstMesData = {
                ...data,
                'text': text.slice(0, 1999),
            }

            dispatch(fetchPostMessage(firstMesData));

            const secondMesData = {
                ...data,
                'text': text.slice(1999,),
                'sentAt': Math.round(Date.now() / 1000),
            }

            dispatch(fetchPostMessage(secondMesData));
            textareaRef.current.style.height = 'auto';
            dispatch(fetchDeleteUserTyping(userTypingDeleteData));
            setIsTyping(false);
            setText('');
            return
        }

        if (replyMessage.id) {
            const replyData = {
                ...data,
                "repliedToMessageId": replyMessage.id
            }
            dispatch(fetchPostMessage(replyData));
            dispatch(clearForm());
            return;
        }

        dispatch(fetchPostMessage(data));
        setText('');
        textareaRef.current.style.height = 'auto';
        dispatch(fetchDeleteUserTyping(userTypingDeleteData));
        setIsTyping(false)
    }

    useEffect(() => {
        if (editMessage.id) {
            setText(editMessage.text)
            if (!isTyping) {
                console.log('typeng');
                dispatch(fetchPostUserTyping(userTypingData));
                setIsTyping(true)
            }
            editMessage.text.length > 100 ? textareaRef.current.style.height = '60px' : textareaRef.current.style.height = 'auto';
        }
        // eslint-disable-next-line
    }, [editMessage.id, editMessage.text, dispatch])
    ///i need it
    // }, [editMessage.id, editMessage.text, dispatch, isTyping])

    useEffect(() => {
        if (isClearForm) {
            if (isTyping) {
                setIsTyping(false)
                dispatch(fetchDeleteUserTyping(userTypingDeleteData));
            }

            setText('')
            dispatch(stopClearForm())
        }
        // eslint-disable-next-line
    }, [isClearForm, isTyping, dispatch])

    return (
        <>
            {editMessage?.id && <FormEditMessage editMessage={editMessage} />}
            {replyMessage?.id && <FormReplyMessage replyMessage={replyMessage}/> }
            <form
                onSubmit={onFormSubmit}
                className='input-mes__form'>

                {!isMember && <NoMemberBtn />}

                <textarea
                    ref={textareaRef}
                    maxLength='4000'
                    rows='1'
                    onChange={onTextareaInput}
                    onKeyDown={onEnterPress}
                    value={text}
                    className='text-inter-14-400 scroll-bar'
                    placeholder={t('global.text-message')}
                />

                <button
                    className='input-mes__button cursor-pointer'
                    type='submit'
                    onClick={onFormSubmit}>
                </button>
            </form>
        </>

    )
}

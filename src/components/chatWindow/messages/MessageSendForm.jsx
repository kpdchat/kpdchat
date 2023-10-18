import React, { useState, useRef } from 'react';
import NoMemberBtn from './NoMemberBtn';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataForMessages } from '../../../store/selectors';
import { fetchPostMessage, fetchDeleteUserTyping, fetchPostUserTyping } from '../../../store/actions/messageAction';

export default function MessageSendForm() {
    const {user, chat} = useSelector(selectDataForMessages);
    const [text, setText] = useState('');
    const {t} = useTranslation();
    const textareaRef = useRef();
    const dispatch = useDispatch();

    const isMember = user.chats.find(el => el.id === chat.id);

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

        if (!text) {
            dispatch(fetchPostUserTyping(userTypingData));
        } else if (value.trim() === '') {
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

        dispatch(fetchPostMessage(data));
        setText('');
        textareaRef.current.style.height = 'auto';
        dispatch(fetchDeleteUserTyping(userTypingDeleteData));
    }

    return (
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
                className='text-inter-14-400 scroll-bar'
                placeholder={ t('global.text-message') }
            />

            <button
                className='input-mes__button cursor-pointer'
                type='submit'
                onClick={ onFormSubmit }>
            </button>
        </form>
    )
}

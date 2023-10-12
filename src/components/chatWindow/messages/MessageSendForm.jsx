import React, { useState, useRef } from 'react'
import NoMemberBtn from './NoMemberBtn'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataForMessages } from '../../../store/selectors';
import { fetchPostMessage } from '../../../store/actions/messageAction';


export default function MessageSendForm() {
    const { user, chat } = useSelector(selectDataForMessages);
    const [text, setText] = useState('');
    const { t } = useTranslation();
    const textareaRef = useRef();
    const dispatch = useDispatch();

    const isMember = user.chats.find(el => el.id === chat.id);

    function onTextareaInput(e) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + "px";
        setText(e.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();

        if (!text) {
            return;
        }

        const date = Math.round(Date.now() / 1000);

        const data = {
            "chatId": chat.id,
            "userId": user.id,
            "text": text,
            "sentAt": date,
        }

        dispatch(fetchPostMessage(data));
        setText('');
        textareaRef.current.style.height = 'auto';
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className='input-mes__form'>
            {!isMember && <NoMemberBtn/>}

            <textarea
                ref={textareaRef}
                rows="1"
                onInput={onTextareaInput}
                value={text}
                className='text-inter-16-400 scroll-bar'
                placeholder={t('global.text-message')} />
            <button
                className='input-mes__button cursor-pointer'
                type='submit'></button>
        </form>
    )
}



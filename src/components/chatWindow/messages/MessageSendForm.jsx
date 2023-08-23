import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';


export default function MessageSendForm({ onMessageSend }) {
    const [text, setText] = useState('')
    const { t } = useTranslation()
    const textareaRef = useRef()

    function onTextareaInput(e) {
        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + "px"
        setText(e.target.value)
    }

    function onFormSubmit(e) {
        e.preventDefault()
        console.log('submit', text)
        if (!text) {
            return
        }
        const message = {
            id: Math.random(),
            userId: 1,
            userName: 'lola',
            text,
        }
        onMessageSend(message)
        setText('')
        textareaRef.current.style.height = 'auto'
    }

    return (
        <form onSubmit={onFormSubmit}>
            <textarea ref={textareaRef} rows="1" onInput={onTextareaInput} value={text} className='text-inter-16-400 scroll-bar' type="text" placeholder={t('global.text-message')} />
            <button type='submit'></button>
        </form>
    )
}



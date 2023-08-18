import React, { useState } from 'react'
import InputEmoji from 'react-input-emoji'
import { MdOutlineAddReaction } from "react-icons/md"


export default function MessageSendForm({ onMessageSend }) {
    const [text, setText] = useState('')

    function onInputEnter() {
        if(!text) {
            return
        }
        console.log('enter', text)
        const message = {
            id: Math.random(),
            userId: 1,
            userName: 'lola',
            text,
        }
        onMessageSend(message)
        setText('')
    }
    function onFormSubmit(e) {
        e.preventDefault()
        console.log('submit', text)
        if(!text) {
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
    }

    return (
        <form className='emoji-form' onSubmit={onFormSubmit}>
            <InputEmoji
                buttonElement={<MdOutlineAddReaction />}
                value={text}
                onChange={setText}
                cleanOnEnter
                shouldReturn
                onEnter={onInputEnter}
                placeholder="Написати повідомлення..."
            />
            <button className='emoji-submit' type='submit'></button>
        </form>
    )
}



import React from "react"
import user_photo from '../../../images/chat-window/user-photo.png'
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import MessageAnotherKebab from "./mes-kebab/MessageAnotherKebab"
import { useKebabClick } from "../../../extra/hooks/useKebabClick"

export default function AnotherMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')

    function onMessageKebabClick(e) {
        onKebabClick(e)
    }
    return (
        <div className="window-mes__another">
            <div className="another__title">
                <img className='chat-img' src={user_photo} alt="" />
                <h3 className='text-inter-18-600'>{message.userName}</h3>
            </div>
            <div className="another__message">
                <div className="another__text">
                    <p className='text-inter-16-400'>{message.text}</p>
                    <span className='time-mes text-inter-12-400'>12:28</span>
                </div>
                <div className="another__kebab">
                    {isOpen && idKebab === 'message' + message.id && <MessageAnotherKebab message={message} />}
                    <img
                        className="cursor-pointer "
                        src={menu_kebab} alt=""
                        onMouseDown={onMessageKebabClick} />
                </div>
            </div>
        </div>
    )
}

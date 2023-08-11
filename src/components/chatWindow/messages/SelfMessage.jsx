import React from "react"
import user_photo from '../../../images/chat-window/user-photo.png'
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import MessageSelfKebab from "./mes-kebab/MessageSelfKebab"
import { useKebabClick } from "../../../extra/hooks/useKebabClick"

export default function SelfMessage({ message }) {
    const { isOpen, id, onKebabClick } = useKebabClick(message.id)
    
    return (
        <div className="window-mes__self self">
            <div className="self__title">
                <h3 className='title-h3'>{message.userName}</h3>
                <img className='chat-img' src={user_photo} alt="" />
            </div>
            <div className="self__message" >
                <div className="self__kebab">
                    {isOpen && id === message.id && <MessageSelfKebab message={message}/>}
                    <img className="cursor-pointer " src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                </div>

                <div className="self__text">
                    <p className='text-16 '>{message.text}</p>
                    <span className='time-mes'>12:28</span>

                </div>
            </div>
        </div>
    )
}

import React from "react"
import user_photo from '../../../images/chat-window/user-photo.png'
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import MesAnotherKebab from "./mes-kebab/MesAnotherKebab"
import { useKebabClick } from "../../../extra/hooks/useKebabClick"

export default function AnotherMessage({ message }) {
    const { isOpen, id, onKebabClick } = useKebabClick(message.id)

    return (
        <div className="window-mes__another">
            <div className="another__title">
                <img className='chat-img' src={user_photo} alt="" />
                <h3 className='title-h3'>{message.userName}</h3>
            </div>
            <div className="another__message">
                <div className="another__text">
                    <p className='text-16'>{message.text}</p>
                    <span className='time-mes'>12:28</span>
                </div>
                <div className="another__kebab">
                    {isOpen && id === message.id && <MesAnotherKebab message={message}/>}
                    <img className="cursor-pointer " src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                </div>
            </div>
        </div>
    )
}
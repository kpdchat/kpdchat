import React from "react"
import user_photo from '../../../../images/chat-window/user-photo.png'
import { MdOutlineMoreVert } from "react-icons/md";
import MessageSelfKebab from "../mes-kebab/MessageSelfKebab"
import { useKebabClick } from "../../../../extra/hooks/useKebabClick"

export default function SelfMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')

    function onMessageKebabClick(e) {
        onKebabClick(e)
    }

    return (
        <div className="window-mes__self self">
            <div className="self__title">
                <h3 className='text-inter-18-600'>{message.userName}</h3>
                <img className='chat-img' src={user_photo} alt="" />
            </div>
            <div className="self__message" >
                <div className="self__kebab">
                    {isOpen && idKebab === 'message' + message.id && <MessageSelfKebab message={message} />}
                    <MdOutlineMoreVert
                        className="another__kebab-icon cursor-pointer"
                        size={20}
                        onMouseDown={onMessageKebabClick} />
                </div>

                <div className="self__text">
                    <p className='text-inter-16-400'>{message.text}</p>
                    <span className='text-inter-12-400'>12:28</span>

                </div>
            </div>
        </div>
    )
}

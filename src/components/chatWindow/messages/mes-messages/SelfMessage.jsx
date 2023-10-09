import React from "react"
import { MdOutlineMoreVert } from "react-icons/md";
import MessageSelfKebab from "../mes-kebab/MessageSelfKebab"
import { useKebabClick } from "../../../../extra/hooks/useKebabClick"
import { getDateTine } from "../../../../extra/config/getDateTine";


export default function SelfMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')
    const sentAt = getDateTine(message.sentAt)
    function onMessageKebabClick(e) {
        onKebabClick(e)
    }

    return (
        <div className="window-mes__self self">
            <div className="self__title">
                <h3 className='text-inter-18-600'>
                    {message.userProfile.nickname}
                </h3>
                <img
                    className='chat-img'
                    src={message.userProfile.profilePictureLink}
                    alt="" />
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
                    <span className='text-inter-12-400'>{sentAt}</span>

                </div>
            </div>
        </div>
    )
}

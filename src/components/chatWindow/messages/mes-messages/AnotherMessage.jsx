import React from "react"
import { MdOutlineMoreVert } from "react-icons/md";
import MessageAnotherKebab from "../mes-kebab/MessageAnotherKebab"
import { useKebabClick } from "../../../../extra/hooks/useKebabClick"
import { getMessageTime } from "../../../../extra/config/getTime";

export default function AnotherMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')
    const sentAt = getMessageTime(message.sentAt)
    function onMessageKebabClick(e) {
        onKebabClick(e)
    }
    return (
        <div className="window-mes__another">
            <div className="another__title">
                <img
                    className='chat-img'
                    src={message.userProfile.profilePictureLink}
                    alt="" />
                <h3 className='text-inter-18-600'>
                    {message.userProfile.nickname}
                </h3>
            </div>
            <div className="another__message">
                <div className="another__text">
                    <p className='text-inter-16-400'>{message.text}</p>
                    <span className='time-mes text-inter-12-400'>{sentAt}</span>
                </div>
                <div className="another__kebab">
                    {isOpen && idKebab === 'message' + message.id && <MessageAnotherKebab message={message} />}
                    <MdOutlineMoreVert
                        className="another__kebab-icon cursor-pointer"
                        size={20}
                        onMouseDown={onMessageKebabClick} />
                </div>
            </div>
        </div>
    )
}

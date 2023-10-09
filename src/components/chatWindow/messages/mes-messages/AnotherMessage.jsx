import React from "react"
import { MdOutlineMoreVert } from "react-icons/md";
import MessageAnotherKebab from "../mes-kebab/MessageAnotherKebab"
import { MdOutlineHideImage } from "react-icons/md";
import { useKebabClick } from "../../../../extra/hooks/useKebabClick"
import { getDateTine } from "../../../../extra/config/getDateTine";

export default function AnotherMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')
    const sentAt = getDateTine(message.sentAt)
    
    function onMessageKebabClick(e) {
        onKebabClick(e)
    }
    return (
        <div className="window-mes__another">
            <div className="another__title">
                {message?.userProfile && <img
                    className='chat-img'
                    src={message?.userProfile?.profilePictureLink}
                    alt="" />}
                {!message?.userProfile && <div className="another__no-member">
                    <MdOutlineHideImage size={20} />
                </div>
                }
                <h3 className='text-inter-18-600'>
                    {message?.userProfile?.nickname
                        ? message?.userProfile?.nickname
                        : "Інкогніто"}
                </h3>
            </div>
            <div className="another__message">
                <div className="another__text">
                    <p className='text-inter-16-400'>{message?.text}</p>
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

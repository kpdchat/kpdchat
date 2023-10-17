import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import MessageSelfKebab from "../mes-kebab/MessageSelfKebab";
import { useKebabClick } from "../../../../extra/hooks/useKebabClick";
import { getDateTine } from "../../../../extra/config/functions/getDateTine";


export default function SelfMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')
    const sentAt = getDateTine(message.sentAt)

    function onMessageKebabClick(e) {
        onKebabClick(e)
    }
    if (!message.id) {
        return (
            <div className="window-mes__self self">
                <div className="self__title no-select">
                    <h3 className='text-inter-18-600'>
                        {message.userProfile.nickname}
                    </h3>
                    <img
                        className='chat-img'
                        src={message.userProfile.profilePictureLink}
                        alt="" />
                </div>
                <div className="self__message" >
                    <div className="self__text self__text_no-sent">
                        <p className='text-inter-16-400'>{message.text}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="window-mes__self self">
            <div className="self__title no-select">
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
                    <span className='text-inter-12-400 no-select'>{sentAt}</span>

                </div>
            </div>
        </div>
    )
}

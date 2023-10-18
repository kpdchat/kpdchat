import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import MessageSelfKebab from "../mes-kebab/MessageSelfKebab";
import { useKebabClick } from "../../../../extra/hooks/useKebabClick";
import { getDateTine } from "../../../../extra/config/functions/getDateTine";
import { useSelector } from "react-redux";
import { selectDataForMessages } from "../../../../store/selectors";

export default function SelfMessage({ message }) {
    const { chat } = useSelector(selectDataForMessages)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')
    const [style, setStyle] = useState({})
    const sentAt = getDateTine(message.sentAt)

    function onMessageKebabClick(e) {
        onKebabClick(e)
    }

    useEffect(() => {
        if (chat?.messages[chat.messages.length - 1].id === message.id) {
            setStyle({
                top: '-85px'
            })
        } else {
            setStyle({})
        }
    }, [chat.messages, message.id])
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
                    {isOpen && idKebab === 'message' + message.id && <MessageSelfKebab style={style} message={message} />}
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

import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import MessageSelfKebab from "../mes-kebab/MessageSelfKebab";
import { useKebabClick } from "../../../../extra/hooks/useKebabClick";
import { getDateTine } from "../../../../extra/config/functions/getDateTine";
import { useSelector } from "react-redux";
import { selectDataForMessages } from '../../../../store/selectors';
import { useShowRepliedMessages } from "./useShowRepliedMessages";

export default function SelfMessage({ message }) {
    const { chat, user } = useSelector(selectDataForMessages);
    const { text, nickname, t } = useShowRepliedMessages(message, user)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message');
    const [style, setStyle] = useState({});
    const sentAt = getDateTine(message.sentAt);

    function onMessageKebabClick(e) {
        onKebabClick(e);
    }

    useEffect(() => {
        if (chat?.messages[chat.messages.length - 1].id === message.id && chat.messages.length > 2) {
            setStyle({
                top: '-155px'
            })
        } else {
            setStyle({});
        }
    }, [chat.messages, message.id])

    if (message.isDeleted) {
        return (<></>)
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
                    {isOpen && idKebab === 'message' + message.id && <MessageSelfKebab style={style} message={message} />}
                    <MdOutlineMoreVert
                        className="another__kebab-icon cursor-pointer"
                        size={20}
                        onMouseDown={onMessageKebabClick} />
                </div>

                <div className="self__text">
                    {message.repliedToMessage &&
                        <div className='self__reply-message reply'>
                            <div className='reply__img'></div>
                            <div className='reply__info'>
                                {nickname && <div className='text-inter-18-600'>{nickname}</div>}
                                <div className='text-inter-16-400'>{text}</div>
                            </div>
                        </div>
                    }
                    <p className='text-inter-16-400 self__text_space'>{message.text}</p>
                    <span className='text-inter-12-400 no-select'>
                        {message.isEdited
                            ? t('global.editMess') + sentAt
                            : sentAt
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

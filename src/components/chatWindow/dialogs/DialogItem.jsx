import React, { useState } from "react";
import ChatKebab from "./chat-kebab/ChatKebab";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { useKebabClick } from "../../../extra/hooks/useKebabClick"
import { selectRenderChatList, selectUi } from "../../../store/selectors";
import { getStyleKebab } from "../../../extra/config/getStyleKebab";
import { deleteStartWindow, setRenderChatId } from "../../../store/actions/messageAction";
import { getMessageTime } from "../../../extra/config/getTime";

export default function DialogItem({ chat, index }) {
    const type = 'onContextChat'
    const [style, setStyle] = useState('')
    const { isActiveFolderKebab } = useSelector(selectUi)
    const list = useSelector(selectRenderChatList)
    const { t } = useTranslation()
    const { isOpen, idKebab, onKebabClick } = useKebabClick(chat.id, 'chat', type)
    const dispatch = useDispatch()

    const sentAt = getSentTime()

    function getSentTime() {
        if (!chat.lastMessage) {
            return
        }
        const messageTime = getMessageTime(chat.lastMessage.sentAt)
        return messageTime
    }


    function onContextClick(e) {
        const styleKebab = getStyleKebab(list, index, e)
        setStyle(styleKebab)
        onKebabClick()
    }
    function onChatClick() {
        dispatch(deleteStartWindow())
        dispatch(setRenderChatId(chat.id))
    }

    return (
        <div className={isActiveFolderKebab && isOpen && idKebab === 'chat' + chat.id
            ? "active-chat list__dialog cursor-pointer"
            : "list__dialog cursor-pointer"}
            onContextMenu={onContextClick}
            onClick={onChatClick}>
            <div className="list__info">
                <img src={chat.chatPictureLink}
                    alt="" />
                <div className="list__text">
                    <h3 className='text-inter-18-600'>{chat.title}</h3>
                    <p className='text-inter-14-400'>
                        {chat?.lastMessage?.text
                            ? chat?.lastMessage?.text
                            : t('global.empty-chat')}
                    </p>
                </div>
            </div>
            <div className="list__data">
                <span className='list__time text-inter-12-400'>{chat?.lastMessage?.sentAt ? sentAt : ''}</span>
                {/* <span className='list__new-count text-inter-12-400'>12</span> */}
            </div>
            {isOpen && idKebab === 'chat' + chat.id &&
                <ChatKebab
                    chat={chat}
                    setStyle={setStyle}
                    style={style} />}
        </div>
    )
}

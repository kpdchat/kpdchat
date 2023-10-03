import React, { useState } from "react";
import ChatKebab from "./chat-kebab/ChatKebab";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import { useSelector } from "react-redux";
import { selectRenderChatList, selectUi } from "../../../store/selectors";
import { getStyleKebab } from "../../../extra/config/getStyleKebab";

export default function DialogItem({ chat, index }) {
    const type = 'onContextChat'
    const { isActiveFolderKebab } = useSelector(selectUi)
    const list = useSelector(selectRenderChatList)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(chat.id, type)
    const [style, setStyle] = useState('')


    const time = chat?.lastMessage?.sentAt?.split('+')[0]
    const date = new Date(time)
    const sentAt =  date.getHours() + ':' + date.getMinutes()


    function onContextClick(e) {
        const styleKebab = getStyleKebab(list, index, e)
        setStyle(styleKebab)
        onKebabClick()
    }

    return (
        <div className={isActiveFolderKebab && isOpen && idKebab === chat.id
            ? "active-chat list__dialog cursor-pointer"
            : "list__dialog cursor-pointer"}
            onContextMenu={onContextClick}>
            <div className="list__info">
                <img src={chat.chatPictureLink}
                    alt="" />
                <div className="list__text">
                    <h3 className='text-inter-18-600'>{chat.title}</h3>
                    <p className='text-inter-14-400'>{chat?.lastMessage?.text} </p>
                </div>
            </div>
            <div className="list__data">
                <span className='list__time text-inter-12-400'>{chat?.lastMessage?.sentAt ? sentAt : ''}</span>
                {/* <span className='list__new-count text-inter-12-400'>12</span> */}
            </div>
            {isOpen && idKebab === chat.id && <ChatKebab chat={chat} setStyle={setStyle} style={style} />}
        </div>
    )
}

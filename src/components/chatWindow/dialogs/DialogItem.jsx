import React from "react";
import ChatKebab from "./chat-kebab/ChatKebab";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import { useSelector, useDispatch } from "react-redux";
import { selectUi } from "../../../store/selectors";


export default function DialogItem({ chat, index }) {
    const type = 'onContextChat'
    const { isModal, modalId } = useSelector(selectUi)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(chat.id, type)
    function onContextClick() {
        onKebabClick()
    }
    return (
        <>
            <div className="list__dialog cursor-pointer" onContextMenu={onContextClick}>
                <div className="list__info">
                    <img src={chat.chatPictureLink}
                        alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>{chat.title}</h3>
                        <p className='text-inter-14-400'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
                            accusamus maxime, temporibus n</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>12</span>
                </div>
                {isOpen && idKebab === chat.id && <ChatKebab chat={chat} index={index} />}
            </div>
        </>
    )
}

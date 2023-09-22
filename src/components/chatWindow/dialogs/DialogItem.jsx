import React, { useState } from "react";
import ChatKebab from "./chat-kebab/ChatKebab";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import { useSelector, useDispatch } from "react-redux";
import { selectRenderChatList, selectUi } from "../../../store/selectors";
import ChatOutModal from '../messages/mes-modal/ChatOutModal'


export default function DialogItem({ chat, index }) {
    const type = 'onContextChat'
    const { isModal, modalId, isActiveFolderKebab } = useSelector(selectUi)
    const list = useSelector(selectRenderChatList)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(chat.id, type)
    const [style, setStyle] = useState('')

    function onContextClick(e) {
        let left = e.pageX - 192
        if(left < 0) {
            left = 2
        }
        if (window.innerWidth > 1250 && left > 142) {
                left = 142
        } else if (window.innerWidth < 1250 && left > 60) {
            left = 40 
        }

        // let top = e.pageY - (156 + 76 * (index))
        let top 
        if (list.length >= 6 && list.length < (index + 6)) {
            top = '-10px'
        } else {
            top = '60px'
        }


        setStyle({
            position: 'absolute',
            left: left + 'px',
            top: top ,
            width: '220px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            zIndex: '2',
            backgroundColor: '#fff',
            boxShadow: '1px 1px 4px 0px #bdbae0',
            borderRadius: '8px',
            padding: '8px',
        })
        onKebabClick()
    }
    return (
        <>
            <div className={isActiveFolderKebab && isOpen && idKebab === chat.id ? "active-chat list__dialog cursor-pointer " : "list__dialog cursor-pointer"} onContextMenu={onContextClick}>
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
                {isOpen && idKebab === chat.id && <ChatKebab chat={chat} setStyle ={setStyle} style={style} />}
            </div>
            {isModal && modalId === 'leave chat' && <ChatOutModal/>}
        </>
    )
}

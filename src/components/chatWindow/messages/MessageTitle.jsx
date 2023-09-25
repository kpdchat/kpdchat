import React from "react";
import chat_logo from '../../../images/chat-window/chat_logo.png'
import { useSelector } from 'react-redux'
import { selectUi } from "../../../store/selectors";
import ChatOutModal from "./mes-modal/ChatOutModal";
import JoinChatModal from "./mes-modal/JoinChatModal";

export default function MessageTitle() {
    const { isModal, modalId } = useSelector(selectUi)

    return (
        <>
            <div className="messages__dialog-name">
                <img src={chat_logo} alt="" />
                <div className="messages__dialog-info">
                    <h3 className='text-inter-18-600'>Настолки у Харкові</h3>
                    <p className='text-inter-14-400'> 245 учасників</p>
                </div>
            </div>
            
            {isModal && modalId === 'leave chat' && <ChatOutModal/>}
            {isModal && modalId === 'join-chat' && <JoinChatModal/>}
        </>

    )
}

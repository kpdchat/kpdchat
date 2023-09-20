import React from "react"
import { PiDoorOpen } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { fetchLeaveChat, setChatToLeave } from "../../../../store/actions/chatActions";
import { setModalOpen } from "../../../../store/actions/uiActions";

export default function ExitChat({ menuRef, style, chat }) {
    const dispatch = useDispatch()

    function onLeaveChatClick() {
        dispatch(setChatToLeave(chat))
        dispatch(setModalOpen('leave chat'))
    }

    return (
        <div ref={menuRef} style={style}>
            <div className="chat-kebab__row cursor-pointer" onClick={onLeaveChatClick}>
                <PiDoorOpen size={24} />
                <p className="text-inter-16-400">Вийти з чату</p>
            </div>
        </div>
    )
}
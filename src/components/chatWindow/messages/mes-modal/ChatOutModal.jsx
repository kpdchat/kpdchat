import React from "react"
import { useDispatch } from 'react-redux'
import { setKebabClose } from "../../../../store/actions/uiActions"

export default function ChatOutModal({ setOut }) {
    const dispatch = useDispatch()

    function onCloseClick() {
        setOut((prev) => !prev)
        dispatch(setKebabClose())
    }
    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="modal-container chat-out" onClick={onCloseClick}>
            <div className="chat-out__content " onClick={onContentClick}>
                <div className="chat-out__message ">
                    <p className="text-18 text-18_mb">Ви остаточно хочете вийти  з даного чату?</p>
                </div>
                <div className="chat-out__buttons">
                    <button onClick={onCloseClick} className="chat-out__stay cursor-pointer">Залишитись</button>
                    <button onClick={onCloseClick} className="chat-out__exit cursor-pointer">Вийти</button>
                </div>
            </div>
        </div>
    )
}
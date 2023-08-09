import React, { useRef, useState } from "react";

export default function ChatOutModal({ setOut }) {
    function onCloseClick(e) {
        setOut((prev) => !prev)
    }
    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="modal-container chat-out" onClick={onCloseClick}>
            <div className="chat-out__content " onClick={onContentClick}>
                <div className="chat-out__message ">
                    <p className="text-18 text-18_mb">Ви остаточно хочете вийти  з даного чату?</p>
                    <p className="text-18">Історію буде втрачено(</p>
                </div>
                <div className="chat-out__buttons">
                    <button onClick={onCloseClick} className="chat-out__stay cursor-pointer">Залишитись</button>
                    <button onClick={onCloseClick} className="chat-out__exit cursor-pointer">Вийти</button>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import chat_logo from '../../../images/chat-window/chat_logo.png'

export default function MessageTitle() {
    return (
        <div className="messages__dialog-name">
            <img src={ chat_logo } alt="" />
            <div className="messages__dialog-info">
                <h3 className='text-inter-18-600'>Настолки у Харкові</h3>
                <p className='text-inter-14-400'> 245 учасників</p>
            </div>

        </div>
    )
}

import React from "react";
import MessageTitle from './MessageTitle'
import MessageSearch from './MessageSearch'
import MessageItem from './MessageItem'
import MessageSendForm from './MessageSendForm'

export default function ChatMessages() {
    return (
        <section className='chat__messages messages'>
            <div className="messages__title">
                <MessageTitle />
                <MessageSearch />
            </div>
            <div className="messages__window-mes window-mes scroll-bar">
                <MessageItem />
            </div>
            <div className="messages__input-mes input-mes">
                <MessageSendForm />
            </div>
        </section>
    )
}

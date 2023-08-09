import React from "react";
import MessageTitle from './MessageTitle'
import MessageSearch from './MessageSearch'
import MessageSendForm from './MessageSendForm'
import MesDate from "./MesDate";
import SelfMessage from "./SelfMessage";
import AnotherMessage from "./AnotherMessage";

export default function ChatMessages() {
    return (
        <section className='chat__messages messages'>
            <div className="messages__title">
                <MessageTitle />
                <MessageSearch />
            </div>
            <div className="messages__window-mes window-mes scroll-bar">
                <MesDate/>
                <SelfMessage/>
                <AnotherMessage/>
                <SelfMessage/>
                <AnotherMessage/>
                <SelfMessage/>
                <MesDate/>
                <SelfMessage/>
                <AnotherMessage/>
            </div>
            <div className="messages__input-mes input-mes">
                <MessageSendForm />
            </div>
        </section>
    )
}

import React, { useState } from "react";
import MessageTitle from './MessageTitle'
import MessageSearch from './MessageSearch'
import MessageSendForm from './MessageSendForm'
import MesDate from "./mes-messages/MesDate";
import SelfMessage from "./mes-messages/SelfMessage";
import AnotherMessage from "./mes-messages/AnotherMessage";
import { useSelector } from "react-redux";
import { selectIsWindowStart } from "../../../store/selectors";
const messages = [
    {
        id: 1,
        userId: 1,
        userName: 'lola',
        text: '  Lorem ipsum dolor  sit amet consectetur adipisicing elit. Debitis eum a possimus, voluptate magni, eaque odio culpa harum neque, eos commodi laudantium dignissimos labore quas! Cum dolor ut saepe nisi dicta pariatur officia error est vitae nulla. Iste nostrum expeditficiis perferendis suscipit earum! Ullam inventore earum repudiandae obcaecati culpa voluptatibus harum dolorem? Possimus fuga qui aperiam ipsam tenetur quos, laudantium ipsa.',
    },
    {
        id: 2,
        userId: 2,
        userName: 'oleh',
        text: 'Lorem ipsum dolo vitae nulla. Iste nostrum expeditficiis perferendis suscipit earum! Ullam inventore earum repudiandae obcaecati culpa voluptatibus harum dolorem? Possimus fuga qui aperiam ipsam tenetur quos, laudantium ipsa.',
    },
    {
        id: 3,
        userId: 4,
        userName: 'sou-chan',
        text: 'Lorem ipsum dolo vitae nulla. Iste nostrum expeditficiis perferendis suscipit earum! Ullam inventore earum repudiandae obcaecati culpa voluptatibus harum dolorem? Possimus fuga qui aperiam ipsam tenetur quos, laudantium ipsa.',
    },
    {
        id: 4,
        userId: 8,
        userName: 'Alisha66',
        text: 'Lorem ipsum dolo vitae nulla. Iste nostrum',
    },
    {
        id: 5,
        userId: 1,
        userName: 'lola',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum a possimus, voluptate magni, eaque odio culpa harum neque, eos commodi laudantium dignissimos labore quas! Cum dolor ut saepe nisi dicta pariatur officia error est vitae nulla. Iste nostrum expeditficiis perferendis suscipit earum! Ullam inventore earum repudiandae obcaecati culpa voluptatibus harum dolorem? Possimus fuga qui aperiam ipsam tenetur quos, laudantium ipsa.',
    },
    {
        id: 6,
        userId: 8,
        userName: 'Alisha66',
        text: 'Lorem ipsum dolo vitae nulla. Iste nostrum',
    },
]
export default function ChatMessages() {
    const [list, setList] = useState(messages)
    const isStartWindow = useSelector(selectIsWindowStart)

    function onMessageSend(message) {
        setList([...list, message])
    }

    return (
        <>
            <section className={isStartWindow ? 'chat__messages messages' : "display-none"}>
                <div className="messages__start">
                    <div className="text-inter-16-400">
                        Почнемо спілкування!
                    </div>
                </div>
            </section>

            <section className={!isStartWindow ? 'chat__messages messages' : "display-none"}>

                <div className="messages__title">
                    <MessageTitle />
                    <MessageSearch />
                </div>
                <div className="messages__window-mes window-mes scroll-bar">
                    <MesDate />
                    {list
                        .map(message => message.userId === 1
                            ? <SelfMessage key={message.id} message={message} />
                            : <AnotherMessage key={message.id} message={message} />)}
                </div>
                <div className="messages__input-mes input-mes">
                    <MessageSendForm onMessageSend={onMessageSend} />
                </div>
            </section>
        </>

    )
}

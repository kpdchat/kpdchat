import React from "react";
import MessageTitle from './MessageTitle'
import MessageSearch from './MessageSearch'
import MessageSendForm from './MessageSendForm'
import MesDate from "./mes-messages/MesDate";
import SelfMessage from "./mes-messages/SelfMessage";
import AnotherMessage from "./mes-messages/AnotherMessage";
import { useDispatch, useSelector } from "react-redux";
import { selectDataForMessages, selectIsWindowStart } from "../../../store/selectors";
import { useEffect } from "react";
import { fetchRenderChat } from "../../../store/actions/messageAction";


export default function ChatMessages() {
    const { user, id, chat } = useSelector(selectDataForMessages)
    const isStartWindow = useSelector(selectIsWindowStart)
    const dispatch = useDispatch()

    useEffect(() => {
        if(id !== 0) {
           dispatch(fetchRenderChat(id)) 
        }
    }, [user, id, dispatch])
    
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
                    {id ? chat?.messages?.map(message => message?.userProfile?.id === user.id
                            ? <SelfMessage key={message.id} message={message} />
                            : <AnotherMessage key={message.id} message={message} />) : "Повідомлень немає"}
                        
                </div>
                <div className="messages__input-mes input-mes">
                    <MessageSendForm />
                </div>
            </section>
        </>

    )
}

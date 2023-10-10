import React from "react";
import MessageTitle from './MessageTitle'
import MessageSearch from './MessageSearch'
import MessageSendForm from './MessageSendForm'
import Messages from "./mes-messages/Messages";
import { useDispatch, useSelector } from "react-redux";
import { selectDataForMessages, selectIsWindowStart } from "../../../store/selectors";
import { useEffect } from "react";
import { fetchRenderChat } from "../../../store/actions/messageAction";


export default function ChatMessages() {
    const { user, id } = useSelector(selectDataForMessages)
    const isStartWindow = useSelector(selectIsWindowStart)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id !== 0) {
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
                <Messages />
                <div className="messages__input-mes input-mes">
                    <MessageSendForm />
                </div>
            </section>
        </>

    )
}

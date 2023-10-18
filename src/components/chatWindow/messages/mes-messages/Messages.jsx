import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDataForMessages, selectFilterByDateMessageList } from "../../../../store/selectors";
import MesDate from "./MesDate";
import SelfMessage from "./SelfMessage";
import AnotherMessage from "./AnotherMessage";
import NoMessages from "./NoMessages";
import NewMessages from "./NewMessages";
import { fetchUpdateLastSeenMessage } from "../../../../store/actions/messageAction";

export default function Messages() {
    const { user, chat } = useSelector(selectDataForMessages)
    const sortChat = useSelector(selectFilterByDateMessageList)
    const messageRef = useRef()
    const newRef = useRef()
    const dispatch = useDispatch()
    const isMember = user.chats.find(el => el.id === chat.id);

    useEffect(() => {
        if (messageRef.current && newRef.current) {
            messageRef.current.scrollTo(0, newRef.current.offsetTop - 200)
        } else {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
        }
    }, [messageRef, chat.messages?.length, newRef])

    useEffect(() => {
        if (chat.messages?.length && isMember) {
            const data = {
                "userId": user.id,
                "chatId": chat.id,
                "messageId": chat.messages[chat.messages?.length - 1].id
            }
            setTimeout(() => {
                dispatch(fetchUpdateLastSeenMessage(data))
            }, 3000)
        }
        // eslint-disable-next-line
    }, [chat?.messages?.length, user.id, sortChat.id, dispatch])

    return (
        <div
            ref={messageRef}
            className="messages__window-mes window-mes scroll-bar">
            {sortChat.messages?.length ? sortChat.messages.map(data => {
                if (data.date) {
                    return <MesDate key={data.date} date={data.date} />
                }
                else if (data.newMess) {
                    return <NewMessages key={'new'} newRef={newRef} />
                } else if (data?.userProfile?.id === user.id) {
                    return <SelfMessage key={data.id} message={data} />
                } else {
                    return <AnotherMessage key={data.id} message={data} />
                }
            }) : <NoMessages />}
        </div>

    )
}
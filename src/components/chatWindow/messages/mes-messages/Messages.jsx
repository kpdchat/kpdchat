import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDataForMessages, selectFilterByDateMessageList, selectIsSearch, selectUnSeenCount } from '../../../../store/selectors';
import MesDate from "./MesDate";
import SelfMessage from "./SelfMessage";
import AnotherMessage from "./AnotherMessage";
import NoMessages from "./NoMessages";
import NewMessages from "./NewMessages";
import { fetchUpdateLastSeenMessage, setLength, setUnSeenCount } from "../../../../store/actions/messageAction";

export default function Messages() {
    const { user, chat, messLength } = useSelector(selectDataForMessages);
    const isSearch = useSelector(selectIsSearch);
    const sortChat = useSelector(selectFilterByDateMessageList);
    const messageRef = useRef();
    const newRef = useRef();
    const unseenCount = useSelector(selectUnSeenCount);
    const [count, setCount] = useState(0);
    const [scroll, setScroll] = useState(0);
    const isMember = user?.chats?.find(el => el.id === chat.id);
    const dispatch = useDispatch();


    useEffect(() => {
        setCount(unseenCount)
        setScroll(chat.id)
        // eslint-disable-next-line
    }, [chat.id])

    useEffect(() => {
        if (count >= 0 && isMember && chat.messages?.length) {

            const data = {
                "userId": user.id,
                "chatId": chat.id,
                "messageId": chat.messages[chat.messages?.length - (count + 1)]?.id
            }
            dispatch(fetchUpdateLastSeenMessage(data))

            setTimeout(() => {
                setCount(prev => prev - 1)
            }, 1500)

        } else if (count < 0 && isMember && chat.messages?.length) {
            const data = {
                "userId": user.id,
                "chatId": chat.id,
                "messageId": chat.messages[chat.messages?.length - 1]?.id
            }
            dispatch(fetchUpdateLastSeenMessage(data))
        }
        // eslint-disable-next-line
    }, [user.id, chat.id, chat.messages?.length, dispatch, count])

    useEffect(() => {
        if (messageRef.current && newRef.current && scroll !== chat.id) {
            messageRef.current.scrollTo(0, newRef.current.offsetTop - 200);
        } else if (!isSearch){
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
        if (chat.messages?.length !== messLength) {
            dispatch(setLength(chat.messages?.length))
        }
        if (unseenCount && messLength && chat.messages?.length > messLength) {
            const newCount = unseenCount + (chat.messages?.length - messLength)
            dispatch(setUnSeenCount(newCount))
        }
        // eslint-disable-next-line
    }, [messageRef, chat.messages?.length, newRef, isSearch])

    return (
        <div
            ref={ messageRef }
            className='messages__window-mes window-mes scroll-bar'>
            { sortChat.messages?.length
                ? sortChat.messages.map(data => {
                    if (data.date) {
                        return <MesDate key={ data.date } date={ data.date } />
                    } else if (data.newMess) {
                        return <NewMessages key={ 'new' } newRef={ newRef } />
                    } else if (data?.userProfile?.id === user.id) {
                        return <SelfMessage key={ data.id } message={ data } />
                    } else {
                        return <AnotherMessage key={ data.id } message={ data } />
                    }
                })
                : <NoMessages />
            }
        </div>
    )
}

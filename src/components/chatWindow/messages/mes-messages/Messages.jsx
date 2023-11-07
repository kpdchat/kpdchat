import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDataForMessages, selectFilterByDateMessageList } from "../../../../store/selectors";
import MesDate from "./MesDate";
import SelfMessage from "./SelfMessage";
import AnotherMessage from "./AnotherMessage";
import NoMessages from "./NoMessages";
import NewMessages from "./NewMessages";

export default function Messages() {
    const { user, chat } = useSelector(selectDataForMessages);
    const sortChat = useSelector(selectFilterByDateMessageList);
    const messageRef = useRef();
    const newRef = useRef();

    useEffect(() => {
        if (messageRef.current && newRef.current) {
            messageRef.current.scrollTo(0, newRef.current.offsetTop - 200);
        } else {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, [messageRef, chat.messages?.length, newRef])

    // console.log(sortChat)

    // const sortMess = sortChat.messages?.length ===

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

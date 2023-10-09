import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MesDate from "./MesDate";
import SelfMessage from "./SelfMessage";
import AnotherMessage from "./AnotherMessage";
import { selectDataForMessages, selectFilterByDateMessageList } from "../../../../store/selectors";

export default function Messages() {
    const { user } = useSelector(selectDataForMessages)
    const sortChatList = useSelector(selectFilterByDateMessageList)
    console.log(sortChatList);
    return (
        <>
            {sortChatList?.length ? sortChatList.map(data => {
                if (data.date) {
                    return <MesDate key={data.id} date={data.date} />
                } else if (data?.userProfile?.id === user.id) {
                    return <SelfMessage key={data.id} message={data} />
                } else {
                    return <AnotherMessage key={data.id} message={data} />
                }
            }) : <div> "Повідомлень немає"</div>}
        </>

    )
}
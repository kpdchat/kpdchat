import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDataForMessages } from '../../../store/selectors';
import { fetchJoinChat } from "../../../store/actions/chatActions";
// import { useState } from "react";

export default function NoMemberBtn() {
    const { chat, user } = useSelector(selectDataForMessages)
    const dispatch = useDispatch()
    // const [isLoading, setIsLoading] = useState(false)

    function onJoinClick() {
        // setIsLoading(true)
        const data = {
            "userId": user.id,
            "chatId": chat.id
        }
        dispatch(fetchJoinChat(data))
        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 1000)
    } 
    //{isLoading ? "text-inter-18-600 cursor-pointer no-member__loading" : "text-inter-18-600 cursor-pointer"}
    return (
        <div className="no-member">
            <button
                onClick={onJoinClick}
                className= "text-inter-18-600 cursor-pointer">
                Приєднатися і почати спілкування
            </button>
        </div>
    )
}
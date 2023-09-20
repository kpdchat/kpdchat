import React from "react"
import { MdOutlineGroupAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../store/selectors";
import { fetchJoinChat } from "../../../../store/actions/chatActions";

export default function JoinChat({ menuRef, style, chat }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    console.log(chat.id, 'JoinChat');
    function onJoinChatClick() {
        const data = {
            "userId": user.id,
            "publicChatId": chat.id
        }
        console.log(data);
        dispatch(fetchJoinChat(data))
    }
    // const menuRef = useRef()
    return (
        <div ref={menuRef} style={style}>
            <div className="chat-kebab__row cursor-pointer" onClick={onJoinChatClick}>
                <MdOutlineGroupAdd size={24} />
                <p className="text-inter-16-400">Приєднатися</p>
            </div>
        </div>
    )
}
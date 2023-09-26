import React, { useRef } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper"
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpen, PiTrashBold } from "react-icons/pi";
import { selectListName, selectRenderChatList, selectUser } from "../../../../store/selectors";
import MyChatKebab from "./MyChatKebab";
import FolderChatKebab from "./FolderChatKebab";
import ExitChat from "./ExitChat";
import JoinChat from "./JoinChat";


export default function ChatKebab({ chat, style, setStyle }) {
    const user = useSelector(selectUser)
    // const chatList = useSelector(selectRenderChatList)
    const listName = useSelector(selectListName)
    const dispatch = useDispatch()
    const menuRef = useRef()
    let kebab
    if (listName === 'publicChats') {
        if (chat.members.find(member => member.id === user.id)) {
            kebab = <ExitChat menuRef={menuRef} style={style} chat ={chat}/>
        } else {
            kebab = <JoinChat menuRef={menuRef} style={style} chat ={chat}/>
        }
    }


    return (
        <KebabWrapper elRef={menuRef} >
            {listName.length > 15 && <FolderChatKebab menuRef={menuRef} setStyle ={setStyle} style={style} chat ={chat}/>}
            {listName === 'mineChats' && <MyChatKebab menuRef={menuRef} setStyle ={setStyle} style={style} chat ={chat}/>}
            {listName === 'publicChats' && kebab}
        </KebabWrapper>
    )
}
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


export default function ChatKebab({ chat, index, style }) {
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
            {listName === 'folderChats' && <FolderChatKebab menuRef={menuRef} style={style} chat ={chat}/>
            // <div ref={menuRef} style={style}>
            //     <div className="chat-kebab__row cursor-pointer">
            //         <MdOutlineCreateNewFolder size={24} />
            //         <p className="text-inter-16-400">Додати до папки</p>
            //         <MdArrowForward className="chat-kebab__arrow" size={24} />
            //     </div>
            //     <div className="chat-kebab__row cursor-pointer">
            //         <PiDoorOpen size={24} />
            //         <p className="text-inter-16-400">Вийти з чату</p>
            //     </div>
            //     <div className="chat-kebab__row cursor-pointer">
            //         <PiTrashBold size={24} />
            //         <p className="text-inter-16-400">Видалити з папки</p>
            //     </div>
            // </div>
            }
            {listName === 'mineChats' && <MyChatKebab menuRef={menuRef} style={style} chat ={chat}/>
            // <div ref={menuRef} style={style}>
            //     <div className="chat-kebab__row cursor-pointer">
            //         <MdOutlineCreateNewFolder size={24} />
            //         <p className="text-inter-16-400">Додати до папки</p>
            //         <MdArrowForward className="chat-kebab__arrow" size={24} />
            //     </div>
            //     <div className="chat-kebab__row cursor-pointer">
            //         <PiDoorOpen size={24} />
            //         <p className="text-inter-16-400">Вийти з чату</p>
            //     </div>
            // </div>
            }
            {listName === 'publicChats' && kebab}
        </KebabWrapper>
    )
}
import React , { useEffect } from "react"
import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpen } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../store/selectors";
import { useState } from "react";
import { setSelectChat } from "../../../../store/actions/chatActions";

export default function MyChatKebab({ menuRef, style, chat, setStyle }) {
    const [open, setOpen] = useState(false)
    const dispatch =  useDispatch()
    const user = useSelector(selectUser)
    useEffect(() => {
        if (style.top === '-10px') {
            setStyle({
                ...style,
                top: '-40px'
            })
        }
    })

    function onAddFolderClick() {
        const folderList = user.folders.reduce((list, folder) => {
            if (folder.publicChats.find(publicChat => publicChat.id === chat.id)) {
                list[folder.id] = folder
            }
             return list
        }, {})
        dispatch(setSelectChat(chat))
        console.log(folderList);
    }

    return (
        <div ref={menuRef} style={style}>
            <div className="chat-kebab__row cursor-pointer" onClick={onAddFolderClick}>
                <MdOutlineCreateNewFolder size={24}/>
                <p className="text-inter-16-400">Додати до папки</p>
                <MdArrowForward className="chat-kebab__arrow" size={24} />
            </div>
            <div className="chat-kebab__row cursor-pointer">
                <PiDoorOpen size={24} />
                <p className="text-inter-16-400">Вийти з чату</p>
            </div>
        </div>
    )
}
import React , { useEffect, useState } from "react"
import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpen } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../store/selectors";
import { setSelectChat, setChatToLeave } from "../../../../store/actions/chatActions";
import FolderListForm from "./FolderListForm";
import { setModalOpen } from "../../../../store/actions/uiActions";

export default function MyChatKebab({ menuRef, style, chat, setStyle }) {
    const [open, setOpen] = useState(false)
    const dispatch =  useDispatch()
    const user = useSelector(selectUser)
    useEffect(() => {
        if (style.top === '-10px') {
            setStyle({
                ...style,
                top: '',
                bottom: '10px'
            })
        }
    })

    function onAddFolderClick() {
        dispatch(setSelectChat(chat))
        setOpen(true)
    }

    function onLeaveChatClick() {
        dispatch(setChatToLeave(chat))
        dispatch(setModalOpen('leave chat'))
    }

    return (
        <div ref={menuRef} style={style}>
            <div 
            className={open ? 'display-none' : "chat-kebab__row cursor-pointer"} 
            onClick={onAddFolderClick}>
                <MdOutlineCreateNewFolder size={24}/>
                <p className="text-inter-16-400">Додати до папки</p>
                <MdArrowForward className="chat-kebab__arrow" size={24} />
            </div>
            <div 
            className={open ? 'display-none' : "chat-kebab__row cursor-pointer"} 
            onClick={onLeaveChatClick}>
                <PiDoorOpen size={24} />
                <p className="text-inter-16-400">Вийти з чату</p>
            </div>
            {open && <FolderListForm setOpen= {setOpen}/>}
        </div>
    )
}
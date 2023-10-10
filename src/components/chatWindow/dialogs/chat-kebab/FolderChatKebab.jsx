import React, { useEffect, useState } from "react"
// import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpenLight, PiTrashLight, PiArrowRightLight, PiFolderPlusLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setSelectChat, setChatToLeave } from "../../../../store/actions/chatActions";
import { setModalOpen } from "../../../../store/actions/uiActions";
import KebabFolderList from "./folders-list-kebab/KebabFolderList";


export default function FolderChatKebab({ menuRef, style, chat, setStyle }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    useEffect(() => {
        if (style.top === '-10px') {
            setStyle({
                ...style,
                top: '-80px'
            })
        }
    })

    function onAddFolderClick(e) {
        e.stopPropagation()
        dispatch(setSelectChat(chat))
        setOpen(true)
    }

    function onLeaveChatClick(e) {
        e.stopPropagation()
        dispatch(setChatToLeave(chat))
        dispatch(setModalOpen('leave chat'))
    }

    function onDeleteFromFolderClick(e) {
        e.stopPropagation()
        dispatch(setSelectChat(chat))
        dispatch(setModalOpen('delete-from-folder'))
    }

    return (
        <div ref={menuRef} style={style}>
            <div
                className={open ? 'display-none' : "chat-kebab__row chat-kebab__row_folders cursor-pointer"}
                onClick={onAddFolderClick}>
                <div className="flex-container">
                    <PiFolderPlusLight
                        size={20} />
                    <p className="text-inter-16-400">
                        {t('chat-context-menu.addToFolder')}</p>
                </div>
                <PiArrowRightLight
                    size={20} />
            </div>
            <div
                className={open ? 'display-none' : "chat-kebab__row cursor-pointer"}
                onClick={onLeaveChatClick}>
                <PiDoorOpenLight size={20} />
                <p className="text-inter-16-400">{t('chat-context-menu.exitChat')}</p>
            </div>
            <div
                className={open ? 'display-none' : "chat-kebab__row cursor-pointer"}
                onClick={onDeleteFromFolderClick}>
                <PiTrashLight size={20} />
                <p className="text-inter-16-400">{t('chat-context-menu.deleteFromFolder')}</p>
            </div>
            {open && <KebabFolderList setOpen={setOpen} />}
        </div>
    )
}
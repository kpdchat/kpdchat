import React, { useEffect, useState } from "react"
import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpen } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setSelectChat, setChatToLeave } from "../../../../store/actions/chatActions";
import KebabFolderList from "./folders-list-kebab/KebabFolderList";
import { setModalOpen } from "../../../../store/actions/uiActions";

export default function MyChatKebab({ menuRef, style, chat, setStyle }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { t } = useTranslation()

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
                className={open ? 'display-none' : "chat-kebab__row chat-kebab__row_folders cursor-pointer"}
                onClick={onAddFolderClick}>
                <div className="flex-container">
                    <MdOutlineCreateNewFolder
                        size={24} />
                    <p className="text-inter-16-400">
                        {t('chat-context-menu.addToFolder')}
                    </p>
                </div>

                <MdArrowForward
                    size={24} />
            </div>
            <div
                className={open ? 'display-none' : "chat-kebab__row cursor-pointer"}
                onClick={onLeaveChatClick}>
                <PiDoorOpen size={24} />
                <p className="text-inter-16-400">{t('chat-context-menu.exitChat')}</p>
            </div>
            {open && <KebabFolderList setOpen={setOpen} />}
        </div>
    )
}
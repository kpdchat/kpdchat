import React, { useRef } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper"
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpen, PiTrashBold } from "react-icons/pi";
import { selectListName, selectRenderChatList } from "../../../../store/selectors";


export default function ChatKebab({ chat, index }) {
    const chatList = useSelector(selectRenderChatList)
    const listName = useSelector(selectListName)
    console.log(chatList);
    const dispatch = useDispatch()
    const menuRef = useRef()


    return (
        <KebabWrapper elRef={menuRef} >
            {listName === 'folderChats' && <div ref={menuRef} className={chatList.length < (index + 3) && chatList.length > 8 ? "kebab-menu chat-kebab chat-kebab_last" : "kebab-menu chat-kebab"}>
                <div className="chat-kebab__row cursor-pointer">
                    <MdOutlineCreateNewFolder size={24} />
                    <p className="text-inter-16-400">Додати до папки</p>
                    <MdArrowForward className="chat-kebab__arrow" size={24} />
                </div>
                <div className="chat-kebab__row cursor-pointer">
                    <PiDoorOpen size={24} />
                    <p className="text-inter-16-400">Вийти з чату</p>
                </div>
                <div className="chat-kebab__row cursor-pointer">
                    <PiTrashBold size={24} />
                    <p className="text-inter-16-400">Видалити з папки</p>
                </div>
            </div>}
            {listName === 'mineChats' && <div ref={menuRef} className={chatList.length < (index + 3) && chatList.length > 8 ? "kebab-menu chat-kebab chat-kebab_last" : "kebab-menu chat-kebab"}>
                <div className="chat-kebab__row cursor-pointer">
                    <MdOutlineCreateNewFolder size={24} />
                    <p className="text-inter-16-400">Додати до папки</p>
                    <MdArrowForward className="chat-kebab__arrow" size={24} />
                </div>
                <div className="chat-kebab__row cursor-pointer">
                    <PiDoorOpen size={24} />
                    <p className="text-inter-16-400">Вийти з чату</p>
                </div>
            </div>}
        </KebabWrapper>
    )
}
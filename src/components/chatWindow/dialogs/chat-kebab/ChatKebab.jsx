import React, { useRef } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper"
import { useDispatch } from "react-redux";
import { MdOutlineGroupAdd, MdArrowForward } from "react-icons/md";
import { PiDoorOpen, PiTrashBold } from "react-icons/pi";


export default function ChatKebab() {
    const dispatch = useDispatch()
    const menuRef = useRef()

    return (
        <KebabWrapper elRef={menuRef} >
            <div ref={menuRef} className="kebab-menu chat-kebab">
                <div className="chat-kebab__row cursor-pointer">
                    <MdOutlineGroupAdd size={24} />
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
            </div>
        </KebabWrapper>
    )
}
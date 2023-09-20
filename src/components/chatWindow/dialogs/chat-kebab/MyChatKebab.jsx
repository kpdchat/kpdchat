import React from "react"
import { MdOutlineCreateNewFolder, MdArrowForward } from "react-icons/md";
import { PiDoorOpen } from "react-icons/pi";
export default function MyChatKebab({ menuRef, style, chat }) {
    // const menuRef = useRef()
    return (
        <div ref={menuRef} style={style}>
            <div className="chat-kebab__row cursor-pointer">
                <MdOutlineCreateNewFolder size={24} />
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
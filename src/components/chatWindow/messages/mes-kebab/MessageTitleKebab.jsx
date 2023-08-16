import React, { useRef, useState } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import ChatOutModal from "../mes-modal/ChatOutModal";
import { PiDoorOpen } from "react-icons/pi";

export default function MessageTitleKebab() {
    const [out, setOut] = useState(false)
    const menuRef = useRef()

    function onOutClick() {
        setOut(true)
    }

    return (
        <KebabWrapper elRef={menuRef}>
            <div ref={menuRef} className="title-kebab kebab-menu">
                <div onClick={onOutClick} className="title-kebab__out cursor-pointer">
                    <PiDoorOpen size={24} />
                    <p className="text-inter-16-400">Вийти з чату</p>
                </div>
            </div>
            {out && <ChatOutModal setOut={setOut} />}
        </KebabWrapper>
    )
}

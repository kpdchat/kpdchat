import React, { useRef, useState } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import ChatOutModal from "../mes-modal/ChatOutModal";

export default function MesTitleKebab() {
    const [out, setOut] = useState(false)
    const menuRef = useRef()

    function onOutClick() {
        setOut(true)
    }
    
    return (
        <KebabWrapper elRef={menuRef}>
            <div ref={menuRef} className="title-kebab kebab-menu">
                <p  className="title-kebab__sound title-h4 cursor-pointer">Додати у папку</p>
                <p onClick={onOutClick} className="title-kebab__out title-h4 cursor-pointer">Вийти з чату</p>
                {out && <ChatOutModal setOut={setOut}/>}
            </div>
        </KebabWrapper>
    )
}       
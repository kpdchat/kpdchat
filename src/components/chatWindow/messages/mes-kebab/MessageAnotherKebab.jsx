import React, { useRef, useState } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper";
import to_send from "../../../../images/chat-window/to-send.png"
import copyIcon from "../../../../images/chat-window/copy.png"
import CopyModal from "../mes-modal/CopyModal"

export default function MesAnotherKebab({ message }) {
    const [copy, setCopy] = useState(false)
    const menuRef = useRef()

    function onCopyClick() {
        setCopy(true)
        navigator.clipboard.writeText(message.text)
    }
    return (
        <KebabWrapper elRef={menuRef} >

            <div ref={menuRef} className="kebab-menu another-kebab">
                <div className="another-kebab__row cursor-pointer" >
                    <img src={to_send} alt="" />
                    <p className="title-h4">Відповісти</p>
                </div>
                <div onClick={onCopyClick} className="another-kebab__row cursor-pointer">
                    <img src={copyIcon} alt="" />
                    <p className=" title-h4">Копіювати</p>
                </div>
                {copy && <CopyModal setCopy={setCopy} />}
            </div>
        </KebabWrapper>
    )
}

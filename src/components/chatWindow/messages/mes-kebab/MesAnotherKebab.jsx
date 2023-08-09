import React, { useRef } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import to_send from "../../../../images/chat-window/to-send.png"
import copy from "../../../../images/chat-window/copy.png"

export default function MesAnotherKebab({ setOpen }) {
    const menuRef = useRef()

    return (
        <KebabWrapper elRef={menuRef} toggleFunc={setOpen}>

            <div ref={menuRef} className="kebab-menu another-kebab">
                <div className="another-kebab__row cursor-pointer" >
                    <img src={to_send} alt="" />
                    <p className="title-h4">Відповісти</p>
                </div>
                <div className="another-kebab__row cursor-pointer">
                    <img src={copy} alt="" />
                    <p className=" title-h4">Копіювати</p>
                </div>
            </div>
        </KebabWrapper>
    )
}
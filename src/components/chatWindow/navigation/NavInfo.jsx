import React, { useState } from "react";
import {ReactComponent as Info} from '../../../images/chat-window/info.svg'
import NavInfoModal from "./nav-modal/NavInfoModal";

export default function NavInfo () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Info onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <NavInfoModal isOpen ={isOpen} setOpen = {setIsOpen}/>}
        </>
    )
}

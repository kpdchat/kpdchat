import React, { useState } from "react";
import { ReactComponent as Settings } from '../../../images/chat-window/settings.svg'
import SettingsModal from "./nav-modal/SettingsModal";

export default function NavSettings() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Settings className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <SettingsModal isOpen ={isOpen} setOpen = {setIsOpen}/>}
        </>
    )
}

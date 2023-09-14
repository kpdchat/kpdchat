import React, { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import SettingsModal from "./nav-modal/settings-modal/SettingsModal";

export default function NavSettings() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <MdOutlineSettings size={36} className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <SettingsModal isOpen ={isOpen} setIsOpen = {setIsOpen}/>}
        </>
    )
}

import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import NavInfoModal from "./nav-modal/NavInfoModal";

export default function NavInfo () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MdInfoOutline size={36} className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <NavInfoModal isOpen ={isOpen} setOpen = {setIsOpen}/>}
        </>
    )
}

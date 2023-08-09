import React, { useState } from "react";
import MesTitleKebab from "./mes-kebab/MesTitleKebab";
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
export default function MessageSearch() {
    const [open, setOpen] = useState(false);

    function onKebabClick(e) {
        e.stopPropagation()
        setOpen(!open)
    }

    return (
        <div className="messages__search">
            <form className='search-form'>
                <input placeholder='Пошук...'></input>
            </form>
            <div className="messages__info" >
                <img className="cursor-pointer" src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                {open && <MesTitleKebab setOpen={setOpen} />}
            </div>
        </div>
    )
}

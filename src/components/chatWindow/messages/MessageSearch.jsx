import React from "react";
import MesTitleKebab from "./mes-kebab/MesTitleKebab";
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import { useKebabClick } from "../../../extra/hooks/useKebabClick"

export default function MessageSearch() {
    const titleId = -1
    const { isOpen, id, onKebabClick } = useKebabClick(titleId)

    return (
        <div className="messages__search">
            <form className='search-form'>
                <input placeholder='Пошук...'></input>
            </form>
            <div className="messages__info" >
                <img className="cursor-pointer" src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                {isOpen && id === titleId && <MesTitleKebab  />}
            </div>
        </div>
    )
}

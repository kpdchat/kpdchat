import React from "react";
import MessageTitleKebab from "./mes-kebab/MessageTitleKebab";
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import { useKebabClick } from "../../../extra/hooks/useKebabClick"
import { useTranslation } from 'react-i18next';

export default function MessageSearch() {
    const titleId = -1
    const { isOpen, idKebab, onKebabClick } = useKebabClick(titleId)
    const { t } = useTranslation()

    return (
        <div className="messages__search">
            <form className='search-form'>
                <input className="text-inter-16-400" placeholder={t('global.search')}></input>
            </form>
            <div className="messages__info" >
                <img className="cursor-pointer" src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                {isOpen && idKebab === titleId && <MessageTitleKebab />}
            </div>
        </div>
    )
}

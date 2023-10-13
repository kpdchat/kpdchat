import React from "react";
import MessageTitleKebab from "./mes-kebab/MessageTitleKebab";
import { MdOutlineMoreVert } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useKebabClick } from "../../../extra/hooks/useKebabClick"
import { useTranslation } from 'react-i18next';

export default function MessageSearch() {
    const titleId = '-1'
    const { isOpen, idKebab, onKebabClick } = useKebabClick(titleId)
    const { t } = useTranslation()
    return (
        <div className="messages__search">
            <form className='search-form'>
                <PiMagnifyingGlass
                    size={24}
                    className="search-form__svg" />
                <input
                    className="text-inter-16-400"
                    placeholder={t('global.search')}/>
            </form>
            <div className="messages__info" >
                <MdOutlineMoreVert
                    size={20}
                    className="cursor-pointer"
                    onMouseDown={onKebabClick} />
                {isOpen && idKebab === titleId && <MessageTitleKebab />}
            </div>
        </div>
    )
}

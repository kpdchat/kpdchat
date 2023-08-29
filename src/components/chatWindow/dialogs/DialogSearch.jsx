import React from "react";
import { useTranslation } from 'react-i18next';


export default function DialogSearch() {
    const { t } = useTranslation()

    return (
        <div className='dialogs__search'>
            <form className='search-form'>
                <input className="text-inter-16-400" placeholder={t('global.search')}></input>
            </form>
        </div>
    )
}

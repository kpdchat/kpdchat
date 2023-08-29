import React from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import { useTranslation } from 'react-i18next';


export default function AddChat() {
    const { t } = useTranslation()

    return (
        <div className="add__item cursor-pointer">
            <MdOutlineGroupAdd size={24}/>
            <h2 className="text-inter-18-600">{t('navigation.chat')}</h2>
        </div>
    )
}
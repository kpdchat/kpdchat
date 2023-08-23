import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { useTranslation } from 'react-i18next';


export default function AddFolder() {
    const { t } = useTranslation()

    return (
        <div className="add__item">
            <AiOutlineFolderAdd className="cursor-pointer" size={24}/>
            <h2 className="text-inter-18-600 cursor-pointer">{t('navigation.folder')}</h2>
        </div>
    )
}
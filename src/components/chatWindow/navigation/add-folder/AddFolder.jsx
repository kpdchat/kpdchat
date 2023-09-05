import React from "react";
import AddFolderModal from "./AddFolderModal";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { MdTrendingUp } from "react-icons/md";


export default function AddFolder() {
    const { t } = useTranslation()
    const [isModal, setIsModal] = useState(false)

    function onAddFolderClick() {
        setIsModal(true)
    }
    return (
        <>
            <div className="add__item cursor-pointer" onClick={onAddFolderClick}>
                <AiOutlineFolderAdd size={24} />
                <h2 className="text-inter-18-600">{t('navigation.folder')}</h2>
            </div>
            {isModal && <AddFolderModal setIsModal={setIsModal}/>}
        </>

    )
}
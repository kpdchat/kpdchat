import React, { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import AddChatModal from "./AddChatModal";


export default function AddChat() {
    const { t } = useTranslation()
    const [isModal, setIsModal] = useState(true)
    function onAddChatClick() {
        setIsModal(true)
    }
    return (
        <>
            <div className="add__item cursor-pointer" onClick={onAddChatClick}>
                <MdOutlineGroupAdd size={24} />
                <h2 className="text-inter-18-600">{t('navigation.chat')}</h2>
            </div>
            {isModal && <AddChatModal />}
        </>

    )
}
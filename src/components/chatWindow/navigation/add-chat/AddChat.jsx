import React from "react";
import { PiUserCirclePlus } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../../store/actions/uiActions";

export default function AddChat() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    function onAddChatClick() {
        dispatch(setModalOpen('create-chat'))
    }
    return (
        <div
            className="add__item cursor-pointer" 
            onClick={onAddChatClick}>
            <PiUserCirclePlus
                size={24}/>
            <h2 className="text-inter-18-600">
                {t('navigation.chat')}</h2>
        </div>
    )
}
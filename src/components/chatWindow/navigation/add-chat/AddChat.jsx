import React from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
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
        <>
            <div className="add__item cursor-pointer" onClick={onAddChatClick}>
                <MdOutlineGroupAdd size={23} className="add__item_chat-svg" />
                <h2 className="text-inter-18-600">{t('navigation.chat')}</h2>
            </div>
        </>

    )
}
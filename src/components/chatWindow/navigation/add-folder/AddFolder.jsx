import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setModalOpen } from "../../../../store/actions/uiActions";



export default function AddFolder() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    function onAddFolderClick() {
        dispatch(setModalOpen('create-folder'))
    }
    return (
        <div className="add__item cursor-pointer" onClick={onAddFolderClick}>
            <MdOutlineCreateNewFolder size={24} />
            <h2 className="text-inter-18-600">{t('navigation.folder')}</h2>
        </div>
    )
}
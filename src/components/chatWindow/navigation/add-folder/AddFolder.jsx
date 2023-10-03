import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen } from "../../../../store/actions/uiActions";
import { selectUser } from "../../../../store/selectors";

export default function AddFolder() {
    const user = useSelector(selectUser)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    function onAddFolderClick() {
        if (user.folders.length >= 10) {
            dispatch(setModalOpen('not-create-folder'))
            return
        }
        dispatch(setModalOpen('create-folder'))
    }
    return (
        <div className="add__item cursor-pointer" onClick={onAddFolderClick}>
            <MdOutlineCreateNewFolder size={24} />
            <h2 className="text-inter-18-600">{t('navigation.folder')}</h2>
        </div>
    )
}
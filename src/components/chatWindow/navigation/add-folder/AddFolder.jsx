import React from "react";
import AddFolderModal from "./AddFolderModal";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectUi } from "../../../../store/selectors";
import { setModalOpen } from "../../../../store/actions/uiActions";



export default function AddFolder() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { isModal, modalId } = useSelector(selectUi)

    function onAddFolderClick() {
        dispatch(setModalOpen('create-folder'))
    }
    return (
        <>
            <div className="add__item cursor-pointer" onClick={onAddFolderClick}>
                <MdOutlineFolderSpecial size={24} />
                <h2 className="text-inter-18-600">{t('navigation.folder')}</h2>
            </div>
            {isModal && modalId === 'create-folder' && <AddFolderModal />}
        </>

    )
}
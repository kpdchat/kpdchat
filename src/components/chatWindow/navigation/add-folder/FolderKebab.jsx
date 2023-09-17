import React, { useRef } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper"
import { PiNotePencilFill, PiTrashBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../../store/actions/uiActions";
import { setDeleteFolder, setEditFolder } from "../../../../store/actions/userActions";
import { useTranslation } from 'react-i18next';

export default function FolderKebab({ folder }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const menuRef = useRef()
    function onDeleteClick() {
        dispatch(setDeleteFolder(folder))
        dispatch(setModalOpen('delete-folder')) 
    }
    function onEditClick() {
        dispatch(setEditFolder(folder))
        dispatch(setModalOpen('edit-folder')) 
    }
    return (
        <KebabWrapper elRef={menuRef} >
            <div ref={menuRef} className="kebab-menu folder-kebab">
                <div className="folder-kebab__row cursor-pointer" onClick={onEditClick}>
                    <PiNotePencilFill size={24} />
                    <p className="text-inter-16-400">{t('addFolder.editFolder')}</p>
                </div>
                <div className="folder-kebab__row cursor-pointer" onClick={onDeleteClick}>
                    <PiTrashBold size={24} />
                    <p className="text-inter-16-400">{t('addFolder.delete')}</p>
                </div>
            </div>
        </KebabWrapper>
    )
}
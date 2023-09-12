import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import {setModalClose} from "../../../../store/actions/uiActions"
import { fetchDeleteFolder } from "../../../../store/actions/userActions";
import { selectDeleteFolder } from "../../../../store/selectors";
import { useTranslation } from 'react-i18next';



export default function FolderDeleteModal({folder}) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const deleteFolder = useSelector(selectDeleteFolder)
    function onCloseClick() {
        dispatch(setModalClose())
    }

    function onDeleteClick() {
        console.log(folder.id, 'modal');
        dispatch(fetchDeleteFolder(deleteFolder))
        dispatch(setModalClose())
    }

    return (
        <div className="modal-container folder-modal">
            <div className="folder-delete__content">
                <div className="folder-delete__header">
                    <MdClose size = {24} className = 'cursor-pointer' onClick={onCloseClick}/>
                </div>
                <p className= 'text-inter-18-400'>{t('addFolder.deleteFolder')}</p>
                <button onClick={onDeleteClick} className= 'text-inter-18-600 cursor-pointer'> {t('global.confirm')} </button>
            </div>
        </div>
    )
}

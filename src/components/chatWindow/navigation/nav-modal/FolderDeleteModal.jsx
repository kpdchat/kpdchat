import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setModalClose } from "../../../../store/actions/uiActions";
import { fetchDeleteFolder } from "../../../../store/actions/folderActions";
import { selectDeleteFolder } from "../../../../store/selectors";
import { useTranslation } from 'react-i18next';



export default function FolderDeleteModal() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const deleteFolder = useSelector(selectDeleteFolder);
    function onCloseClick() {
        dispatch(setModalClose());
    }

    function onDeleteClick() {
        dispatch(fetchDeleteFolder(deleteFolder));
        dispatch(setModalClose());
    }

    return (
        <div className="modal-container folder-modal">
            <div className="modal-container__content folder-delete__content">
                <div className="modal-container__header">
                    <h3 className="text-inter-18-600">
                        {t('addFolder.deleteFolderTitle')}</h3>
                    <MdClose size={24}
                        className='close-img cursor-pointer'
                        onClick={onCloseClick} />
                </div>
                <div className="modal-container__description">
                    <p className='text-inter-18-400'>
                        {t('addFolder.deleteFolder')}</p>
                    <button
                        onClick={onDeleteClick}
                        className='text-inter-18-600 cursor-pointer'>
                        {t('global.confirm')} </button>
                </div>

            </div>
        </div>
    )
}

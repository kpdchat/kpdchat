import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setModalClose } from "../../../../store/actions/uiActions";
import { fetchUpdateFolder } from "../../../../store/actions/folderActions";
import { useTranslation } from 'react-i18next';
import { selectFolderToDeleteFrom } from "../../../../store/selectors";

export default function DeleteFromFolderModal() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const updateFolder = useSelector(selectFolderToDeleteFrom);

    function onCloseClick() {
        dispatch(setModalClose());
    }

    //delete from folder function
    function onDeleteClick() {
        dispatch(fetchUpdateFolder(updateFolder));
        dispatch(setModalClose());
    }
    return (
        <div className="modal-container">
            <div className="modal-container__content folder-delete__content">
                <div className="modal-container__header">
                    <h3 className="text-inter-18-600">
                        {t('chat-context-menu.deleteFromFolder')}</h3>
                    <MdClose
                        size={24}
                        className='close-img cursor-pointer'
                        onClick={onCloseClick} />
                </div>
                <div className="modal-container__description">
                    <p className='text-inter-18-400'>
                        {t('chat-context-menu.delete-from-folder-text')}</p>
                    <button
                        onClick={onDeleteClick}
                        className='text-inter-18-600 cursor-pointer'> {t('global.confirm')} </button>
                </div>
            </div>
        </div>
    )
}

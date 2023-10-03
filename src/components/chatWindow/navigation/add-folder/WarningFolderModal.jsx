import React from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setModalClose } from "../../../../store/actions/uiActions";


export default function WarningFolderModal() {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onCloseClick() {
        dispatch(setModalClose())
    }
    return (
        <div className="modal-container warning-folder">
            <div className="warning-folder__content">
                <p className="text-inter-16-400">
                    {t('addFolder.warningDelete')}
                </p>
                <button
                    className="text-inter-18-600 cursor-pointer"
                    onClick={onCloseClick}>
                    {t('addFolder.understand')}</button>
            </div>
        </div>
    )
}
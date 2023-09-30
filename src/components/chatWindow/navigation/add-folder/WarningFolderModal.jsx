import React from "react";
import { MdClose } from "react-icons/md";
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
                <div className="warning-folder__header">
                    <MdClose size={24}
                        className='cursor-pointer'
                        onClick={onCloseClick} />
                </div>

                <p className="text-inter-18-400">
                    Нажаль не можна створити більше 10 папок
                </p>
                <button
                    className="text-inter-18-600 cursor-pointer"
                    onClick={onCloseClick}>
                    Зрозуміло</button>
            </div>
        </div>
    )
}
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setModalClose, setWindowChatClose } from '../../store/actions/uiActions';
import { deleteUserError } from '../../store/actions/userActions';
import { deleteStartWindow } from '../../store/actions/messageAction';

export default function UserFetchError() {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onCloseClick() {
        localStorage.removeItem('user')
        dispatch(setModalClose())
        dispatch(setWindowChatClose())
        dispatch(deleteUserError())
        dispatch(deleteStartWindow())
    }

    return (
        <div className="modal-container warning">
            <div className="warning__content">
                <p className="text-inter-16-400">
                    {t('global.error')}
                </p>
                <button
                    className="text-inter-18-600 cursor-pointer"
                    onClick={onCloseClick}>
                    {t('addFolder.understand')}</button>

            </div>
        </div>
    )
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { DotSpinner } from '@uiball/loaders';
import { setLoaderHide, setLoaderShow, setModalClose } from "../../../../store/actions/uiActions";
import { clearDeleteMessage, fetchDeleteMessage } from "../../../../store/actions/messageAction";
import { selectDeleteMessage, selectUi, selectUser } from "../../../../store/selectors";
import { useTranslation } from 'react-i18next';


export default function DeleteMessageModal() {
    const deleteMessage = useSelector(selectDeleteMessage)
    const { isActiveLoader } = useSelector(selectUi)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const { t } = useTranslation();

    function onCloseClick() {
        dispatch(setModalClose())
        dispatch(clearDeleteMessage())
    }
    function onForMeDeleteClick() {
        const data = {
            "messageId": deleteMessage.id,
            "userId": user.id,
            "isHidden": false
        }
        dispatch(fetchDeleteMessage(data))
        setLoader()
    }

    function onForAllDeleteClick() {
        const data = {
            "messageId": deleteMessage.id,
            "userId": user.id,
            "isHidden": true
        }
        dispatch(fetchDeleteMessage(data))
        setLoader()
    }

    function setLoader() {
        dispatch(setLoaderShow())
        setTimeout(() => {
            dispatch(setLoaderHide())
            dispatch(setModalClose())
            dispatch(clearDeleteMessage())
        }, 1500)
    }
    return (
        <div className="modal-container modal-delete-message">
            <div className="modal-container__content">
                <div className="modal-delete-message__header">
                    <h3 className="text-inter-18-600">
                        {t("global.delete-message")}</h3>
                    <MdClose size={24}
                        className='close-img cursor-pointer'
                        onClick={onCloseClick} />
                </div>
                <p className='text-inter-18-400'>
                    {t("global.want-delete")}</p>
                <div className="modal-delete-message__buttons">
                    <button
                        className='text-inter-18-600 cursor-pointer'
                        onClick={onForMeDeleteClick}>
                        {t("global.forMe")} </button>
                    <button
                        className='text-inter-18-600 cursor-pointer'
                        onClick={onForAllDeleteClick}>
                        {t("global.forAll")}</button>
                </div>
            </div>
            <div className={isActiveLoader ? "loading" : "display-none"} >
                <DotSpinner
                    size={70}
                    speed={0.9}
                    color="#38328A"
                />
            </div>
        </div>
    )
}
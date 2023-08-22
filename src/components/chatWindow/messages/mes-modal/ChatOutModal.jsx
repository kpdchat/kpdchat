import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { setModalClose } from "../../../../store/actions/uiActions"

export default function ChatOutModal() {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onCloseClick() {
        dispatch(setModalClose())
    }

    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="modal-container chat-out" onClick={onCloseClick}>
            <div className="chat-out__content" onClick={onContentClick}>
                <MdClose className="chat-out__close cursor-pointer" size={20} onClick={onCloseClick} />
                <p className="text-inter-18-400">{t('global.exit-text')}</p>
                <button className="text-inter-18-600 cursor-pointer" onClick={onCloseClick} >{t('global.confirm')}</button>
            </div>
        </div>
    )
}

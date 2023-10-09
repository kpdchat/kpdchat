import React, { useRef } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiDoorOpen } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { setModalOpen } from "../../../../store/actions/uiActions"
import { useDispatch, useSelector } from 'react-redux'
import { selectDataForMessages } from "../../../../store/selectors";
import { setChatToLeave } from "../../../../store/actions/chatActions";


export default function MessageTitleKebab() {
    const { chat } = useSelector(selectDataForMessages)
    const menuRef = useRef()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onOutClick() {
        dispatch(setChatToLeave(chat))
        dispatch(setModalOpen('leave chat'))
    }

    return (
        <KebabWrapper elRef={menuRef}>
            <div
                ref={menuRef}
                className="title-kebab kebab-menu">
                <div
                    onClick={onOutClick}
                    className="title-kebab__out cursor-pointer">
                    <PiDoorOpen size={24} />
                    <p className="text-inter-16-400">{t('global.leave-chat')}</p>
                </div>
            </div>
        </KebabWrapper>
    )
}

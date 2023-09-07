import React, { useRef } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiDoorOpen } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { setModalOpen } from "../../../../store/actions/uiActions"
import { useDispatch } from 'react-redux'


export default function MessageTitleKebab() {
    const menuRef = useRef()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onOutClick() {
        dispatch(setModalOpen(-1))
    }

    return (
        <KebabWrapper elRef={menuRef}>
            <div ref={menuRef} className="title-kebab kebab-menu">
                <div onClick={onOutClick} className="title-kebab__out cursor-pointer">
                    <PiDoorOpen size={24} />
                    <p className="text-inter-16-400">{t('global.leave-chat')}</p>
                </div>
            </div>
        </KebabWrapper>
    )
}

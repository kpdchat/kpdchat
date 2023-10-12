import React, { useRef } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiDoorOpen, PiUserCirclePlus } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { setModalOpen } from "../../../../store/actions/uiActions"
import { useDispatch, useSelector } from 'react-redux'
import { selectDataForMessages } from "../../../../store/selectors";
import { setChatToLeave, setChatToJoin } from "../../../../store/actions/chatActions";


export default function MessageTitleKebab() {
    const { chat, user } = useSelector(selectDataForMessages)
    const menuRef = useRef()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onOutClick() {
        dispatch(setChatToLeave(chat))
        dispatch(setModalOpen('leave chat'))
    }
    function onJoinChatClick() {
        dispatch(setChatToJoin(chat))
        dispatch(setModalOpen('join-chat'))
    }

    return (
        <KebabWrapper elRef={menuRef}>
            {chat.members.find(member => member.id === user.id)
                ? <div
                    ref={menuRef}
                    className="title-kebab kebab-menu">
                    <div
                        onClick={onOutClick}
                        className="title-kebab__out cursor-pointer">
                        <PiDoorOpen size={24} />
                        <p className="text-inter-16-400">{t('global.leave-chat')}</p>
                    </div>
                </div>
                : <div
                    ref={menuRef}
                    className="title-kebab kebab-menu">
                    <div
                        className="title-kebab__out cursor-pointer"
                        onClick={onJoinChatClick}>
                        <PiUserCirclePlus size={24} />
                        <p className="text-inter-16-400">
                            {t('chat-context-menu.joinChat')}</p>
                    </div>
                </div>}
        </KebabWrapper>
    )
}

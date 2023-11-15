import React, { useRef } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiShareFat, PiCopy } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { setReplyMessage, clearEditMessage } from '../../../../store/actions/messageAction';
import { setKebabClose, setModalClose, setModalOpen } from '../../../../store/actions/uiActions';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataForMessages } from "../../../../store/selectors";

export default function MesAnotherKebab({ message, style }) {
    const { user, chat } = useSelector(selectDataForMessages)
    const menuRef = useRef();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const isMember = user.chats.find(el => el.id === chat.id);
    
    function onReplyClick() {
        dispatch(clearEditMessage())
        dispatch(setReplyMessage(message));
        dispatch(setKebabClose());
    }

    function onCopyClick() {
        dispatch(setModalOpen('copy-modal'))
        navigator.clipboard.writeText(message.text);
        dispatch(setKebabClose());
        setTimeout(() => {
            dispatch(setModalClose())
        }, 1000)

    }
    return (
        <KebabWrapper elRef={menuRef} >
            <div
                ref={menuRef}
                style={style}
                className="kebab-menu another-kebab no-select">
                {isMember &&
                    <div
                        onClick={onReplyClick}
                        className="another-kebab__row cursor-pointer" >
                        <PiShareFat size={20} />
                        <p className="text-inter-16-400">{t('global.answer')}</p>
                    </div>}

                <div
                    onClick={onCopyClick}
                    className="another-kebab__row cursor-pointer">
                    <PiCopy size={20} />
                    <p className="text-inter-16-400">{t('global.copy')}</p>
                </div>
            </div>
        </KebabWrapper>
    )
}

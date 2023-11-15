import React, { useRef } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiShareFat, PiCopy, PiTrash, PiNotePencil } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { clearEditMessage, clearReplyMessage, setDeleteMessage, setEditMessage, setReplyMessage } from '../../../../store/actions/messageAction';
import { setKebabClose, setModalClose, setModalOpen } from "../../../../store/actions/uiActions";
import { selectDataForMessages } from "../../../../store/selectors";

export default function MesSelfKebab({ message, style }) {
    const { user, chat } = useSelector(selectDataForMessages)
    const dispatch = useDispatch();
    const menuRef = useRef();
    const { t } = useTranslation();
    const isMember = user.chats.find(el => el.id === chat.id);

    function onReplyClick() {
        dispatch(clearEditMessage());
        dispatch(setReplyMessage(message));
        dispatch(setKebabClose());
    }

    function onDeleteClick() {
        dispatch(setDeleteMessage(message));
        dispatch(setModalOpen('delete-message'));
        dispatch(setKebabClose());
    }

    function onEditClick() {
        dispatch(clearReplyMessage());
        dispatch(setEditMessage(message));
        dispatch(setKebabClose());
    }

    function onCopyClick() {
        dispatch(setModalOpen('copy-modal'));
        navigator.clipboard.writeText(message.text);
        dispatch(setKebabClose());
        setTimeout(() => {
            dispatch(setModalClose())
        }, 1000)
    }

    return (
        <KebabWrapper elRef={menuRef}>
            <div
                ref={menuRef}
                style={style}
                className='kebab-menu self-kebab no-select'>
                {isMember &&
                    <>
                        <div
                            onClick={onReplyClick}
                            className='self-kebab__row cursor-pointer'>
                            <PiShareFat size={20} />
                            <p className='text-inter-16-400'>{t('global.answer')}</p>
                        </div>
                        <div
                            onClick={onDeleteClick}
                            className='self-kebab__row cursor-pointer'>
                            <PiTrash size={20} />
                            <p className='text-inter-16-400'>{t('global.delete')}</p>
                        </div>
                        <div
                            onClick={onEditClick}
                            className='self-kebab__row cursor-pointer'>
                            <PiNotePencil size={20} />
                            <p className='text-inter-16-400'>{t('global.edit')}</p>
                        </div>
                    </>
                }

                <div
                    onClick={onCopyClick}
                    className='self-kebab__row cursor-pointer'>
                    <PiCopy size={20} />
                    <p className='text-inter-16-400'>{t('global.copy')}</p>
                </div>
            </div>
        </KebabWrapper>
    )
}

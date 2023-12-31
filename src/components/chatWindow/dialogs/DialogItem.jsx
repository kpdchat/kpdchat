import React, { useState } from 'react';
import ChatKebab from './chat-kebab/ChatKebab';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useKebabClick } from '../../../extra/hooks/useKebabClick';
import { selectDataForMessages, selectRenderChatList, selectUi } from '../../../store/selectors';
import { getStyleKebab } from '../../../extra/config/functions/getStyleKebab';
import { deleteStartWindow, setRenderChatId, setUnSeenCount, setLength } from '../../../store/actions/messageAction';
import { getTimeUnix } from '../../../extra/config/functions/getTimeUnix';
import UserTypingDialogs from './UserTypingDialogs';
import { setCloseNav, setOpenMessage } from '../../../store/actions/uiActions';

export default function DialogItem({ dialog, index }) {
    const type = 'onContextChat';
    const [style, setStyle] = useState({});
    const { isActiveFolderKebab, isOpenNav } = useSelector(selectUi);
    const list = useSelector(selectRenderChatList);
    const { id, user } = useSelector(selectDataForMessages);
    const { t } = useTranslation();
    const { isOpen, idKebab, onKebabClick } = useKebabClick(dialog.id, 'chat', type);
    const dispatch = useDispatch();
    const dialogStyle = getDialogStyle();
    const sentAt = getSentTime();
    const messagesDisplay = getDisplay();

    const delay = 500;
    const [startPress, setStartPress] = useState(null)

    function onMouseDown() {
        setStartPress(Date.now())
    }
    function onMouseUp(e) {
        if (Date.now() - startPress > delay) {
            if (isOpenNav) {
                dispatch(setCloseNav())
                return
            }
            const styleKebab = getStyleKebab(list, index, e);
            setStyle(styleKebab);
            onKebabClick();
            return
        }
        setStartPress(null)
    }

    function getDialogStyle() {
        if (dialog.id === id) {
            return 'open-chat list__dialog cursor-pointer';
        } else if (isActiveFolderKebab && isOpen && idKebab === 'chat' + dialog.id) {
            return 'active-chat-kebab list__dialog cursor-pointer';
        } else {
            return 'list__dialog cursor-pointer';
        }
    }

    function getSentTime() {
        if (!dialog.messages.length) {
            return;
        }

        return getTimeUnix(dialog.messages[0].sentAt);
    }

    function onContextClick(e) {
        if (window.innerWidth > 503) {
            if (isOpenNav) {
                dispatch(setCloseNav())
                return
            }
            const styleKebab = getStyleKebab(list, index, e);
            setStyle(styleKebab);
            onKebabClick();
        }
    }

    function onChatClick() {
        if (isOpen && window.innerWidth < 503) {
            return
        }
        if (isOpenNav) {
            dispatch(setCloseNav())
            return
        }
        dispatch(setUnSeenCount(dialog.unseenMessageCount))
        dispatch(setLength(0))
        dispatch(deleteStartWindow());
        dispatch(setRenderChatId(dialog.id));
        if (window.innerWidth <= 780) {
            dispatch(setOpenMessage())
        }
    }

    function getDisplay() {
        const nicknames = dialog?.userTypingDtos?.filter(el => el.userProfile.id !== user.id).map((el) => el.userProfile.nickname);

        if (nicknames?.length) {
            return <UserTypingDialogs nicknames={nicknames} />
        }

        if (dialog?.messages[0]?.text) {
            return (
                <>
                    <span className='text-inter-14-500'>{dialog?.messages[0]?.userProfile?.nickname
                        ? dialog?.messages[0]?.userProfile?.nickname
                        : 'Incognito'}</span>  : {dialog?.messages[0]?.text}
                </>
            )
        }

        return t('global.empty-chat')
    }

    return (
        <div className={dialogStyle}
            onContextMenu={onContextClick}
            onClick={onChatClick}
            onTouchStart={onMouseDown}
            onTouchEnd={onMouseUp}>
            <img src={dialog.chatPictureLink}
                alt='' />
            <div className='list__info'>

                <div className='list__title'>
                    <h3 className='text-inter-18-600'>{dialog.title}</h3>
                    <p className='list__time text-inter-12-400'>
                        {dialog?.messages[0]?.sentAt ? sentAt : ''}</p>
                </div>
                <div className='list__data'>
                    <p className='text-inter-14-400'>
                        {messagesDisplay}
                    </p>
                    {(dialog?.unseenMessageCount || dialog?.unseenMessageCount > 0)
                        && <p className='list__new-count text-inter-12-400'>{dialog?.unseenMessageCount}</p>}
                </div>
            </div>

            {isOpen && idKebab === 'chat' + dialog.id &&
                <ChatKebab
                    chat={dialog}
                    setStyle={setStyle}
                    style={style}
                />
            }
        </div>
    )
}

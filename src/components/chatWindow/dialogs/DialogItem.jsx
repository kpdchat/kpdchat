import React, { useState } from 'react';
import ChatKebab from './chat-kebab/ChatKebab';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useKebabClick } from '../../../extra/hooks/useKebabClick';
import { selectDataForMessages, selectRenderChatList, selectUi } from '../../../store/selectors';
import { getStyleKebab } from '../../../extra/config/functions/getStyleKebab';
import { deleteStartWindow, setRenderChatId, fetchUpdateLastSeenMessage } from '../../../store/actions/messageAction';
import { getTimeUnix } from '../../../extra/config/functions/getTimeUnix';
import UserTypingDialogs from './UserTypingDialogs';

export default function DialogItem({ dialog, index }) {
    const type = 'onContextChat';
    const [style, setStyle] = useState('');
    const { isActiveFolderKebab } = useSelector(selectUi);
    const list = useSelector(selectRenderChatList);
    const { id, user, chat } = useSelector(selectDataForMessages);
    const { t } = useTranslation();
    const { isOpen, idKebab, onKebabClick } = useKebabClick(dialog.id, 'chat', type);
    const dispatch = useDispatch();
    const isMember = user.chats.find(el => el.id === chat.id);
    const dialogStyle = getDialogStyle();
    const sentAt = getSentTime();
    const messagesDisplay = getDisplay();

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
        const styleKebab = getStyleKebab(list, index, e);
        setStyle(styleKebab);
        onKebabClick();
    }

    function onChatClick() {
        if (id && chat.messages?.length && isMember) {
            const data = {
                "userId": user.id,
                "chatId": id,
                "messageId": chat.messages[chat.messages?.length - 1].id
            }
            dispatch(fetchUpdateLastSeenMessage(data))
        }

        dispatch(deleteStartWindow());
        dispatch(setRenderChatId(dialog.id));

    }

    function getDisplay() {
        const nicknames = dialog?.userTypingDtos?.filter(el => el.userProfile.id !== user.id).map((el) => el.userProfile.nickname);

        if (nicknames?.length) {
            return <UserTypingDialogs nicknames={nicknames} />
        }

        if (dialog?.messages[0]?.text) {
            return (
                <>
                    <span className='text-inter-14-500'>{dialog?.messages[0]?.userProfile?.nickname}</span>  : {dialog?.messages[0]?.text}
                </>
            )
        }

        return t('global.empty-chat')
    }



    return (
        <div className={dialogStyle}
            onContextMenu={onContextClick}
            onClick={onChatClick}>
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

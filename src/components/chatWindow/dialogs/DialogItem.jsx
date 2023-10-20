import React, {useState} from 'react';
import ChatKebab from './chat-kebab/ChatKebab';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useKebabClick} from '../../../extra/hooks/useKebabClick';
import {selectDataForMessages, selectRenderChatList, selectUi} from '../../../store/selectors';
import {getStyleKebab} from '../../../extra/config/functions/getStyleKebab';
import {deleteStartWindow, setRenderChatId} from '../../../store/actions/messageAction';
import {getTimeUnix} from '../../../extra/config/functions/getTimeUnix';
import UserTyping from '../messages/mes-modal/UserTyping';

export default function DialogItem({chat, index}) {
    const type = 'onContextChat';
    const [style, setStyle] = useState('');
    const {isActiveFolderKebab} = useSelector(selectUi);
    const list = useSelector(selectRenderChatList);
    const value = useSelector(selectDataForMessages);
    const {t} = useTranslation();
    const {isOpen, idKebab, onKebabClick} = useKebabClick(chat.id, 'chat', type);
    const dispatch = useDispatch();

    const dialogStyle = getDialogStyle();

    function getDialogStyle() {
        if (chat.id === value.id) {
            return 'open-chat list__dialog cursor-pointer';
        } else if (isActiveFolderKebab && isOpen && idKebab === 'chat' + chat.id) {
            return 'active-chat-kebab list__dialog cursor-pointer';
        } else {
            return 'list__dialog cursor-pointer';
        }
    }

    const sentAt = getSentTime();

    function getSentTime() {
        if (!chat.messages.length) {
            return;
        }

        return getTimeUnix(chat.messages[0].sentAt);
    }

    function onContextClick(e) {
        const styleKebab = getStyleKebab(list, index, e);
        setStyle(styleKebab);
        onKebabClick();
    }

    function onChatClick() {
        dispatch(deleteStartWindow());
        dispatch(setRenderChatId(chat.id));
    }

    const userTyping = value.chat?.userTypingDtos?.filter(el => el.userProfile.id !== value.user.id);

    const isUserTyping = userTyping && userTyping.length > 0;

    return (
        <div className={ dialogStyle }
             onContextMenu={ onContextClick }
             onClick={ onChatClick }>
            <div className='list__info'>
                <img src={ chat.chatPictureLink }
                     alt='' />
                <div className='list__text'>
                    <h3 className='text-inter-18-600'>{ chat.title }</h3>
                    <p className='text-inter-14-400'>
                        { isUserTyping && value.chat?.id === chat.id
                            ? <UserTyping />
                        : chat?.messages[0]?.text
                                ? chat?.messages[0]?.text
                                : t('global.empty-chat')
                        }
                        {/*{ chat?.messages[0]?.text*/}
                        {/*    ? chat?.messages[0]?.text*/}
                        {/*    : t('global.empty-chat') }*/}
                    </p>
                </div>
            </div>
            <div className='list__data'>
                <span className='list__time text-inter-12-400'>
                    { chat?.messages[0]?.sentAt ? sentAt : '' }</span>
                { (chat?.unseenMessageCount || chat?.unseenMessageCount > 0)
                    && <span className='list__new-count text-inter-12-400'>{ chat?.unseenMessageCount }</span> }
            </div>
            { isOpen && idKebab === 'chat' + chat.id &&
                <ChatKebab
                    chat={ chat }
                    setStyle={ setStyle }
                    style={ style }
                />
            }
        </div>
    )
}

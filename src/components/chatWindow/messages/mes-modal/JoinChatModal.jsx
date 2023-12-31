import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setModalClose } from "../../../../store/actions/uiActions";
import { selectJoinChat, selectUser } from "../../../../store/selectors";
import { cleanChat, fetchJoinChat } from "../../../../store/actions/chatActions";
import JoinModalCounter from './JoinModalCounter';

export default function JoinChatModal() {
    const user = useSelector(selectUser);
    const joinChat = useSelector(selectJoinChat);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const members = joinChat.members.length;

    function onCloseClick() {
        dispatch(setModalClose());
        dispatch(cleanChat());
    }

    function onJoinChatClick() {
        const data = {
            "userId": user.id,
            "chatId": joinChat.id
        }
        dispatch(fetchJoinChat(data));
        dispatch(setModalClose());
    }

    return (
        <div className='modal-container modal-chat'>
            <div className='modal-container__content modal-chat__content'>
                <div className='modal-container__header'>
                    <h3 className='text-inter-16-600'>{t('chat-context-menu.joinToChat')}</h3>
                    <MdClose
                        className='modal-chat__close close-img cursor-pointer'
                        size={24}
                        onClick={onCloseClick} />
                </div>
                <div className="modal-container__description modal-chat">
                    <div className='flex-container'>
                        <img
                            src={joinChat.chatPictureLink}
                            alt='chat-logo' />
                        <div className='modal-chat__about'>
                            <p className='text-inter-16-600'>{joinChat.title}</p>
                            <JoinModalCounter members={members} />
                        </div>
                    </div>
                    <button
                        className='text-inter-16-600 cursor-pointer modal-container__button'
                        onClick={onJoinChatClick}>{t('chat-context-menu.joinChat')}</button>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setModalClose } from "../../../../store/actions/uiActions";
import { selectLeaveChat, selectUser } from "../../../../store/selectors";
import { cleanChat, fetchLeaveChat } from "../../../../store/actions/chatActions";
import OutModalCounter from './OutModalCounter';

export default function ChatOutModal() {
    const user = useSelector(selectUser);
    const chat = useSelector(selectLeaveChat);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const outChatMembers = chat?.members?.length - 1;

    function onCloseClick() {
        dispatch(setModalClose());
        dispatch(cleanChat());
    }

    function onLeaveClick() {
        const data = {
            "userId": user.id,
            "chatId": chat.id
        }
        dispatch(fetchLeaveChat(data));
        dispatch(setModalClose());
    }

    return (
        <div className="modal-container modal-chat" >
            <div className="modal-container__content modal-chat__content">
                <div className="modal-chat__header">
                    <h3 className="text-inter-16-600">{t('chat-context-menu.exitChat')}</h3>
                    <MdClose
                        className="modal-chat__close close-img cursor-pointer"
                        size={24}
                        onClick={onCloseClick} />
                </div>

                <div className="flex-container">
                    <img 
                    src={chat.chatPictureLink} 
                    alt="chat-logo"/>
                    <div className="modal-chat__about">
                        <p className="text-inter-16-600">{chat?.title}</p>
                        <OutModalCounter outChatMembers={outChatMembers} />
                    </div>
                </div>

                <button
                    className="text-inter-16-600 cursor-pointer"
                    onClick={onLeaveClick} >{t('chat-context-menu.leave')}</button>
            </div>
        </div>
    )
}

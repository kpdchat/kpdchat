import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { setModalClose } from "../../../../store/actions/uiActions"
import { selectJoinChat, selectUser } from "../../../../store/selectors";
import { cleanChat, fetchJoinChat } from "../../../../store/actions/chatActions";

export default function JoinChatModal() {
    const user = useSelector(selectUser)
    const joinChat = useSelector(selectJoinChat)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onCloseClick() {
        dispatch(setModalClose())
        dispatch(cleanChat())
    }

    function onJoinChatClick() {
        const data = {
            "userId": user.id,
            "publicChatId": joinChat.id
        }
        dispatch(fetchJoinChat(data))
        dispatch(setModalClose())
    }
    return (
        <div className="modal-container modal-chat">
            <div className="modal-chat__content">
                <div className="modal-chat__header">
                    <h3 className="text-inter-18-600">Приєднатись до чату</h3>
                    <MdClose
                        className="modal-chat__close cursor-pointer"
                        size={24}
                        onClick={onCloseClick} />
                </div>
                <div className="flex-container">
                    <img src={joinChat.chatPictureLink} />
                    <div className="modal-chat__about">
                    
                    <p className="text-inter-18-600">{joinChat.title}</p>
                    <p className="text-inter-14-400">{joinChat.members.length} учасників </p>
                </div>
                </div>
                
                <button
                    className="text-inter-18-600 cursor-pointer"
                    onClick={onJoinChatClick}>Приєднатись</button>
            </div>
        </div>
    )
}
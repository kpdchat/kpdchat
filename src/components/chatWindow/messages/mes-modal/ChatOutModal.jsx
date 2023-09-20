import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { setModalClose } from "../../../../store/actions/uiActions"
import { selectLeaveChat, selectUser } from "../../../../store/selectors";
import { cleanChatToLeave, fetchLeaveChat } from "../../../../store/actions/chatActions";

export default function ChatOutModal() {
    const user = useSelector(selectUser)
    const chat = useSelector(selectLeaveChat)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function onCloseClick() {
        dispatch(setModalClose())
        dispatch(cleanChatToLeave())
    }

    function onContentClick(e) {
        e.stopPropagation()
    }

    function onLeaveClick() {
        const data = {
            "userId": user.id,
            "publicChatId": chat.id
        }
        dispatch(fetchLeaveChat(data))
        dispatch(setModalClose())

    }

    return (
        <div className="modal-container chat-out" onClick={onCloseClick}>
            <div className="chat-out__content" onClick={onContentClick}>
                <MdClose className="chat-out__close cursor-pointer" size={20} onClick={onCloseClick} />
                <p className="text-inter-18-400">{t('global.exit-text')}</p>
                <button className="text-inter-18-600 cursor-pointer" onClick={onLeaveClick} >{t('global.confirm')}</button>
            </div>
        </div>
    )
}

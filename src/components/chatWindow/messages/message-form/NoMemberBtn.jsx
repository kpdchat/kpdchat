import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDataForMessages } from '../../../../store/selectors';
import { fetchJoinChat } from "../../../../store/actions/chatActions";
import { useTranslation } from 'react-i18next';

export default function NoMemberBtn() {
    const { chat, user } = useSelector(selectDataForMessages)
    const { t } = useTranslation();
    const dispatch = useDispatch()

    function onJoinClick(e) {
        e.stopPropagation()
        const data = {
            "userId": user.id,
            "chatId": chat.id
        }
        dispatch(fetchJoinChat(data))
    }
    return (
        <div className="no-member">
            <button
                onClick={onJoinClick}
                className="text-inter-18-600 cursor-pointer">
                {t('global.join-start')}
            </button>
        </div>
    )
}
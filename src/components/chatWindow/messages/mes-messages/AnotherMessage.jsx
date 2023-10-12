import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import MessageAnotherKebab from "../mes-kebab/MessageAnotherKebab"
import incognitoLight from '../../../../images/chat-window/incognito-light.png';
import incognitoDark from '../../../../images/chat-window/inkognito-dark.png';
import { useKebabClick } from "../../../../extra/hooks/useKebabClick";
import { getDateTine } from "../../../../extra/config/getDateTine";
import { useTranslation } from 'react-i18next';

export default function AnotherMessage({ message }) {
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message')
    const { t } = useTranslation();
    const incognitoTheme = localStorage.getItem('theme');

    const sentAt = getDateTine(message.sentAt)

    function onMessageKebabClick(e) {
        onKebabClick(e)
    }
    
    return (
        <div className="window-mes__another">
            <div className="another__title">
                {message?.userProfile
                    ? <img
                        className='chat-img'
                        src={message?.userProfile?.profilePictureLink}
                        alt="" />
                    : <img
                        className='chat-img'
                        src={ incognitoTheme === 'light' ? incognitoLight : incognitoDark }
                        alt="" />}

                <h3 className='text-inter-18-600'>
                    {message?.userProfile?.nickname
                        ? message?.userProfile?.nickname
                        : t('global.incognito')}
                </h3>
            </div>
            <div className="another__message">
                <div className="another__text">
                    <p className='text-inter-16-400'>{message?.text}</p>
                    <span className='time-mes text-inter-12-400'>{sentAt}</span>
                </div>
                <div className="another__kebab">
                    {isOpen && idKebab === 'message' + message.id && <MessageAnotherKebab message={message} />}
                    <MdOutlineMoreVert
                        className="another__kebab-icon cursor-pointer"
                        size={20}
                        onMouseDown={onMessageKebabClick} />
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import MessageAnotherKebab from "../mes-kebab/MessageAnotherKebab";
import incognitoLight from '../../../../images/chat-window/incognito-light.png';
import incognitoDark from '../../../../images/chat-window/inkognito-dark.png';
import { useKebabClick } from "../../../../extra/hooks/useKebabClick";
import { getDateTine } from "../../../../extra/config/functions/getDateTine";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { selectDataForMessages } from "../../../../store/selectors";

export default function AnotherMessage({ message }) {
    const { chat } = useSelector(selectDataForMessages);
    const { isOpen, idKebab, onKebabClick } = useKebabClick(message.id, 'message');
    const [style, setStyle] = useState({});
    const { t } = useTranslation();
    const incognitoTheme = localStorage.getItem('theme');

    const sentAt = getDateTine(message.sentAt);

    function onMessageKebabClick(e) {
        onKebabClick(e);
    }

    function getText() {
        if (message?.repliedToMessage?.text?.length > 30) {
            return message?.repliedToMessage?.text.slice(0, 30) + '...';
        }
        return message?.repliedToMessage?.text;
    }

    const text = getText();
    const nickname = message?.repliedToMessage?.userProfile?.nickname;

    useEffect(() => {
        if (chat?.messages[chat.messages.length - 1].id === message.id) {
            setStyle({
                top: '-85px'
            })
        } else {
            setStyle({});
        }
    }, [chat.messages, message.id])

    return (
        <div className='window-mes__another'>
            <div className='another__title no-select'>
                { message?.userProfile
                    ? <img
                        className='chat-img'
                        src={ message?.userProfile?.profilePictureLink }
                        alt='' />
                    : <img
                        className='chat-img'
                        src={ incognitoTheme === 'light' ? incognitoLight : incognitoDark }
                        alt='' />
                }
                <h3 className='text-inter-18-600'>
                    { message?.userProfile?.nickname
                        ? message?.userProfile?.nickname
                        : t('global.incognito')
                    }
                </h3>
            </div>
            <div className='another__message'>
                <div className='another__text'>

                    { message.repliedToMessage &&
                        <div className='another__reply-message another__reply'>
                            <div className='another__reply__img'></div>
                            <div className='another__reply__info'>
                                <div className='text-inter-18-600'>{ nickname }</div>
                                <div className='text-inter-16-400'>{ text }</div>
                            </div>
                        </div>
                    }

                    <p className='text-inter-16-400 another__text_space'>
                        { message?.text }
                    </p>

                    <span className='time-mes text-inter-12-400 no-select'>
                        { message.isEdited
                            ? t('global.editMess') + sentAt
                            : sentAt
                        }
                    </span>
                </div>
                <div className='another__kebab'>
                    { isOpen && idKebab === 'message' + message.id &&
                        <MessageAnotherKebab style={ style } message={ message } />
                    }

                    <MdOutlineMoreVert
                        className='another__kebab-icon cursor-pointer'
                        size={ 20 }
                        onMouseDown={ onMessageKebabClick } />
                </div>
            </div>
        </div>
    )
}

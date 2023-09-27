import React, { useEffect } from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions/userActions';
import { selectOpenChat, selectUser } from '../../store/selectors';
import { DotSpinner } from '@uiball/loaders'
import { useTranslation } from 'react-i18next';
import { setRenderList, setRenderListName } from '../../store/actions/chatActions';
import { languageList } from '../../extra/config/language-list';
import { useState } from 'react';

export default function WindowChat() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const serverUser = useSelector(selectUser);
    const isOpenChat = useSelector(selectOpenChat);
    const { i18n, t } = useTranslation();
    const [renderCount, setRenderCount] = useState(0)

    function onContextClick(e) {
        e.preventDefault()
    }
    
    // set user first time
    useEffect(() => {
        if (user?.id) {
            dispatch(fetchUser(user.id));
        }
    }, [user?.id, dispatch])

    //set render mine chats only for first load
    useEffect(() => {
        if (serverUser?.id && renderCount < 1) {
            setRenderCount(1)
            dispatch(setRenderListName('mineChats'))
            dispatch(setRenderList(serverUser.chats))
        }
    }, [serverUser?.id, dispatch, renderCount, serverUser.chats])

    //set localization 
    useEffect(() => {
        i18n.changeLanguage(languageList[serverUser?.localization])
    }, [serverUser?.localization, i18n]);

    if (!serverUser.id) {
        return (
            <div className={isOpenChat ? 'chat-loader' : 'display-none'}>
                <DotSpinner
                    size={120}
                    speed={0.9}
                    color="#38328A"
                />
                <p className='text-inter-18-600'>{t('global.loading')}</p>
            </div>
        )
    }

    return (
        <div className={isOpenChat ? 'chat' : 'display-none'}>
            <div className='container-grid' onContextMenu={onContextClick}>
                <ChatNavigation />
                <ChatDialogs />
                <ChatMessages />
            </div>
        </div>
    );
}

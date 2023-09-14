import React, {useEffect} from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../../store/actions/userActions';
import {selectOpenChat, selectUser} from '../../store/selectors';
import {DotSpinner} from '@uiball/loaders'
import {useTranslation} from 'react-i18next';

export default function WindowChat() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const serverUser = useSelector(selectUser);
    const isOpenChat = useSelector(selectOpenChat);
    const {i18n} = useTranslation();

    function onContextClick(e) {
        e.preventDefault();
    }

    // User Language
    const languageList = {
        0: 'ua',
        1: 'en'
    };

    useEffect(() => {
        if (user?.id) {
            dispatch(fetchUser(user.id));
        }

    }, [user?.id, dispatch]);

    useEffect( () => {
        void i18n.changeLanguage(languageList[serverUser?.localization])
        // eslint-disable-next-line
    }, [serverUser?.localization]);

    if (!serverUser.id) {
        return (
            <div className={ isOpenChat ? 'chat-loader' : 'display-none' }>
                <DotSpinner
                    size={ 100 }
                    speed={ 0.9 }
                    color='#38328A'
                />
            </div>
        )
    }

    return (
        <div className={ isOpenChat ? 'chat' : 'display-none' }>
            <div className='container-grid' onContextMenu={ onContextClick }>
                <ChatNavigation />
                <ChatDialogs />
                <ChatMessages />
            </div>
        </div>
    )
}

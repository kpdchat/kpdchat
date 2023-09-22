import React, { useContext, useEffect } from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';
import { Context } from "../../context/Context";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions/userActions';
import { selectUser } from '../../store/selectors';
import { DotSpinner } from '@uiball/loaders'
import { useTranslation } from 'react-i18next';
import { setRenderList } from '../../store/actions/chatActions';



export default function WindowChat() {
    const { isActive } = useContext(Context);
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const user = JSON.parse(localStorage.getItem('user'))
    const serverUser = useSelector(selectUser)

    useEffect(() => {
        if (user?.id) {
            dispatch(fetchUser(user.id))
        }
    }, [user?.id, dispatch])

    useEffect(() => {
        if (serverUser?.id) {
            const data = {
                list: serverUser.chats,
                name: 'mineChats'
            }
            dispatch(setRenderList(data))
        }
        // }, [serverUser?.id])
    }, [serverUser?.chats?.length])

    function onContextClick(e) {
        e.preventDefault()
    }

    if (!serverUser.id) {
        return (
            <div className={isActive ? 'chat-loader' : "display-none"}>
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
        <div className={isActive ? 'chat' : "display-none"}>
            <div className='container-grid' onContextMenu={onContextClick}>
                <ChatNavigation />
                <ChatDialogs />
                <ChatMessages />
            </div>
        </div>

    );
}

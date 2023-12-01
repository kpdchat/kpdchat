import React, { useState } from 'react';
import MessageTitle from './MessageTitle';
import MessageSearch from './MessageSearch';
import MessageSendForm from './message-form/MessageSendForm';
import Messages from './mes-messages/Messages';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectDataForMessages, selectIsWindowStart, selectUi } from '../../../store/selectors';
import { useEffect } from 'react';
import { fetchRenderChat } from '../../../store/actions/messageAction';
import { setCloseMessage } from '../../../store/actions/uiActions';


export default function ChatMessages() {
    const { user, id } = useSelector(selectDataForMessages);
    const isStartWindow = useSelector(selectIsWindowStart);
    const { isOpenMessage } = useSelector(selectUi);
    const  [isMobile, setIsMobile]  = useState(false)
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const style = setMessageClassName()
    function setMessageClassName() {
        if(isOpenMessage && isMobile) {
            return 'chat__messages messages'
        }
        if(isMobile && !isOpenMessage) {
            return 'display-none'
        }
        if(!isMobile && !isOpenMessage && !isStartWindow) {
            return 'chat__messages messages'
        }
        if(isStartWindow) {
            return 'display-none'
        }
    }

    useEffect(() => {
        if (id !== 0) {
            dispatch(fetchRenderChat(id));
        }
    }, [user, id, dispatch])

    useEffect(() => {
        if (window.innerWidth <= 780) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
            dispatch(setCloseMessage())
        }
        // eslint-disable-next-line
    }, [dispatch, window.innerWidth])

    return (
        <>
            <section className={(isStartWindow && !isMobile) ? 'chat__messages messages' : 'display-none'}>
                <div className='messages__start'>
                    <div className='text-inter-16-400'>
                        {t('global.start-messages')}
                    </div>
                </div>
            </section>

            <section className={style}>
                <div className='messages__title'>
                    <MessageTitle />
                    <MessageSearch />
                </div>
                <Messages />
                <MessageSendForm />
            </section>
        </>
    )
}

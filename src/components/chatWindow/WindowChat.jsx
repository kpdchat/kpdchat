import React, { useContext, useEffect } from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';
import { Context } from "../../context/Context";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions/userActions';
import { selectUser } from '../../store/selectors';
import { DotSpinner } from '@uiball/loaders'



export default function WindowChat() {
    const { isActive } = useContext(Context);
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const serverUser = useSelector(selectUser)
    useEffect(() => {
        if (user?.id) {
            dispatch(fetchUser(user.id))
        }
    }, [user?.id, dispatch])
    function onContextClick(e) {
        e.preventDefault()
    }

    if (!serverUser.id) {
        return (
            <div className='chat-loader'>
                <DotSpinner
                    size={100}
                    speed={0.9}
                    color="#38328A"
                />
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

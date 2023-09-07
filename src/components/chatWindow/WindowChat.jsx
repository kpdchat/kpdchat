import React, {useContext, useEffect} from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';
import {Context} from "../../context/Context";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions/userActions';
import { selectUser } from '../../store/selectors';

export default function WindowChat() {
    const {isActive} = useContext(Context);
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const serverUser = useSelector(selectUser)
    useEffect(() => {
        dispatch(fetchUser(user.id))
    }, [user.id, dispatch])
    function onContextClick(e) {
        e.preventDefault()
    }

    if(!serverUser.id) {
        return <div>loading//</div>
    }
    

    
    return (
        <div className={ isActive ? 'chat' : "display-none" }>
            <div className='container-grid' onContextMenu={onContextClick}>
                <ChatNavigation />
                <ChatDialogs />
                <ChatMessages />
            </div>
        </div>

    );
}

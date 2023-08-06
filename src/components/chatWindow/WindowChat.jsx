import React, {useContext} from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';
import {ContextOpenChat} from "../../Context/ContextOpenChat";

export default function WindowChat() {
    const {isActive} = useContext(ContextOpenChat);

    return (
        <div className={ isActive ? 'chat' : "display-none" }>
            {/* <div className='chat'> */ }
            <div className='container-grid'>
                <ChatNavigation />
                <ChatDialogs />
                <ChatMessages />
            </div>
            {/* </div > */ }
        </div>

    );
}

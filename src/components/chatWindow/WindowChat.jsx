import React from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';

export function WindowChat({isActive}) {
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

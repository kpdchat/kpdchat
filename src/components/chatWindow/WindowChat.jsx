import React from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import ChatDialogs from './dialogs/ChatDialogs';
import ChatMessages from './messages/ChatMessages';

export function WindowChat() {
  return (
    <div className='chat'>
      <div className='container-grid'>
        <ChatNavigation/>
        <ChatDialogs/>
        <ChatMessages/>
      </div>
    </div >
  );
}
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDataForMessages } from '../../../store/selectors';
import JoinModalCounter from './mes-modal/JoinModalCounter';
import UserTyping from './mes-modal/UserTyping';

export default function MessageTitle() {
    const {user, chat} = useSelector(selectDataForMessages);
    const members = chat?.members?.length;
    const userTyping = chat?.userTypingDtos?.filter(el => el.userProfile.id !== user.id);

    const isUserTyping = userTyping && userTyping.length > 0;

    return (
        <div className='messages__dialog-name'>
            <img src={ chat?.chatPictureLink } alt='chat images' />
            <div className='messages__dialog-info'>
                <h3 className='text-inter-18-600'>{ chat?.title }</h3>
                { isUserTyping ? <UserTyping /> : <JoinModalCounter members={ members } /> }
            </div>
        </div>
    )
}

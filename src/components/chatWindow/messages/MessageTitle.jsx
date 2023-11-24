import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataForMessages, selectUi } from '../../../store/selectors';
import JoinModalCounter from './mes-modal/JoinModalCounter';
import { PiArrowLeft } from "react-icons/pi";
import UserTyping from './mes-modal/UserTyping';
import { setCloseMessage } from '../../../store/actions/uiActions';

export default function MessageTitle() {
    const { user, chat } = useSelector(selectDataForMessages);
    const { isOpenMessage } = useSelector(selectUi)
    const dispatch = useDispatch()
    const members = chat?.members?.length;
    const userTyping = chat?.userTypingDtos?.filter(el => el.userProfile.id !== user.id);
    const isUserTyping = userTyping && userTyping.length > 0;

    function onReturnClick() {
        dispatch(setCloseMessage())
    }

    return (
        <div className='messages__dialog-name'>
            {isOpenMessage &&
                <PiArrowLeft
                    className='cursor-pointer'
                    size={22}
                    onClick={onReturnClick} />}
            <img src={chat?.chatPictureLink} alt='chat images' />
            <div className='messages__dialog-info'>
                <h3 className='text-inter-18-600'>{chat?.title}</h3>
                {isUserTyping ? <UserTyping /> : <JoinModalCounter members={members} />}
            </div>
        </div>
    )
}

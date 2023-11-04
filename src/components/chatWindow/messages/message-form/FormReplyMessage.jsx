import React from 'react';
import { PiArrowUpLeftBold } from 'react-icons/pi';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { clearReplyMessage } from '../../../../store/actions/messageAction';

export default function FormReplyMessage({ replyMessage }) {
    const dispatch = useDispatch();

    function getText() {
        if (replyMessage.text.length > 100) {
            return replyMessage.text.slice(0, 100) + '...';
        }
        return replyMessage.text;
    }

    const text = getText();
    const nickname = replyMessage.userProfile.nickname;

    function onCloseClick() {
        dispatch(clearReplyMessage());
    }

    return (
        <div className='input-mes__edit-reply edit-reply'>
            <div className='edit-reply__info'>
                <PiArrowUpLeftBold
                    size={ 24 }
                    color='var(--color-lavender-white)'
                />
                <h2 className='text-inter-18-600'>{ nickname }:</h2>
                <p className='text-inter-16-400'>{ text }</p>
            </div>

            <MdOutlineClose
                className='close-img cursor-pointer'
                size={ 24 }
                onClick={ onCloseClick }
            />
        </div>
    )
}

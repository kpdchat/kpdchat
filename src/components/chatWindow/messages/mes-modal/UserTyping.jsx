import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectDataForMessages} from '../../../../store/selectors';

export default function UserTyping() {
    const {chat} = useSelector(selectDataForMessages);
    const {t} = useTranslation();

    const nicknames = chat?.userTypingDtos.map( (el) => el.userProfile.nickname);

    let displayText = '';

    if (nicknames) {
        if (nicknames.length <= 3) {
            displayText = nicknames.join(', ');
        } else {
            const firstThreeNicknames = nicknames.slice(0, 3).join(', ');
            const remainingCount = nicknames.length - 3;
            displayText = `${firstThreeNicknames} и другие (${remainingCount})`;
        }
    }

    return (
        <>
            <div className='user-typing'>
                <p className='text-inter-14-400'>
                    { displayText } is typing
                </p>

                <div className='newtons-cradle'>
                    <div className='newtons-cradle__dot'></div>
                    <div className='newtons-cradle__dot'></div>
                    <div className='newtons-cradle__dot'></div>
                    <div className='newtons-cradle__dot'></div>
                </div>
            </div>
        </>
    );
}

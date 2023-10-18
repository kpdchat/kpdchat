import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectDataForMessages} from '../../../../store/selectors';

export default function UserTyping() {
    const {user} = useSelector(selectDataForMessages);
    const {t} = useTranslation();

    return (
        <>
            <div className='user-typing'>
                <p className='text-inter-14-400'>
                    { user.nickname } is typing
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

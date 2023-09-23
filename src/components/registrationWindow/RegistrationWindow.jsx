import React from 'react';
import Info from './info/Info';
import RegistrationAndEnter from './registrationAndEnter/RegistrationAndEnter';
import {selectOpenChat} from '../../store/selectors';
import {useSelector} from 'react-redux';

export default function RegistrationWindow() {
    const isOpenChat = useSelector(selectOpenChat);

    return (
        <div className={ isOpenChat ? 'display-none' : 'registration_window' }>
            <Info />
            <RegistrationAndEnter />
        </div>
    );
}

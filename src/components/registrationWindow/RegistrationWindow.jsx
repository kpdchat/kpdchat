import React, {useContext} from 'react';
import Info from './info/Info';
import RegistrationAndEnter from './registrationAndEnter/RegistrationAndEnter';
import {Context} from '../../context/Context';

export default function RegistrationWindow() {
    const {isActive} = useContext(Context);

    return (
        <div className={ isActive ? 'display-none' : 'registration_window' }>
            <Info />
            <RegistrationAndEnter />
        </div>
    );
}

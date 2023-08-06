import React from 'react';
import LogoChat from "./LogoChat";
import RegistrationInfoDescription from "./RegistrationInfoDescription";
import RegistrationInput from "./RegistrationInput";
import RegistrationAuthorization from "./RegistrationAuthorization";

export default function Registration() {
    return (
        <div className='registration'>
            <div className='registration-block'>
                <LogoChat />
                <RegistrationInfoDescription />
                <RegistrationInput />
                <RegistrationAuthorization />
            </div>
        </div>
    );
}

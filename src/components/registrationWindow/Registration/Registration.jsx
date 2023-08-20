import React from 'react';
import LogoChat from './LogoChat';
import RegistrationInfoDescription from './RegistrationInfoDescription';
import RegistrationInput from './RegistrationInput';
import RegistrationAuthorization from './RegistrationAuthorization';
import LanguageButton from './LanguageButton';

export default function Registration() {
    return (
        <div className='registration'>

            <div className='language-block'>
                <LanguageButton />
            </div>

            <div className='registration-block'>
                <LogoChat />
                <RegistrationInfoDescription />
                <RegistrationInput />
                <RegistrationAuthorization />
            </div>
        </div>
    );
}

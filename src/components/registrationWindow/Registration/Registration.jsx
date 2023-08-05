import React from 'react';
import LogoChat from "./LogoChat";
import RegistrationInfoDescription from "./RegistrationInfoDescription";
import RegistrationInput from "./RegistrationInput";
import RegistrationAuthorization from "./RegistrationAuthorization";

export default function Registration({onDisplay}) {
    return (
        <div className='registration'>
            <div className='registration-block'>
                <LogoChat />
                <RegistrationInfoDescription />
                <RegistrationInput />
                <RegistrationAuthorization onDisplay={ onDisplay } />
            </div>
        </div>
    );
}

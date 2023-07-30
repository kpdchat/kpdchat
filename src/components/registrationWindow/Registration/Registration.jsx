import React from 'react';
import {LogoChat} from "./LogoChat";
import {RegistrationInfoDescription} from "./RegistrationInfoDescription";
import {RegistrationInput} from "./RegistrationInput";
import {RegistrationAuthorization} from "./RegistrationAuthorization";

export function Registration() {
  return (
      <div className='registration'>
        <div className='registration_block'>

            <LogoChat/>
            <RegistrationInfoDescription/>
            <RegistrationInput/>
            <RegistrationAuthorization/>

        </div>
      </div>
  );
}
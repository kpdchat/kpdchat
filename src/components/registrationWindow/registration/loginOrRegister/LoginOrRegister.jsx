import React from 'react';
import RegistrationInput from '../loginOrRegister/RegistrationInput';
import RegistrationAuthorization from './registrationAuthorization/RegistrationAuthorization';

export default function LoginOrRegister({setUniKey}) {
  return (
      <>
          <div className='registration-block__description'>
              <p>
                  Для входу в чат потрібно ввести унікальний ідентифікатор
              </p>
          </div>
          <RegistrationInput />
          <RegistrationAuthorization setUniKey={ setUniKey } />
      </>
  );
}
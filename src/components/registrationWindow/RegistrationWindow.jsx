import React from 'react';
import {Info} from "./Info/Info";
import {Registration} from "./Registration/Registration";

export function RegistrationWindow() {
  return (
        <div className='registration_window'>

          <Info />
          <Registration />

        </div>
  );
}
import React from 'react';
import Info from "./Info/Info";
import Registration from "./Registration/Registration";

export default function RegistrationWindow({onDisplay, isActive}) {
    return (
        <div className={ isActive ? 'display-none' : 'registration_window' }>
            <Info />
            <Registration onDisplay={ onDisplay } />
        </div>
    );
}

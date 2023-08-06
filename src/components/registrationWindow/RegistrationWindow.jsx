import React, {useContext} from 'react';
import Info from "./Info/Info";
import Registration from "./Registration/Registration";
import {ContextOpenChat} from "../../Context/ContextOpenChat";

export default function RegistrationWindow() {
    const {isActive} = useContext(ContextOpenChat);

    return (
        <div className={ isActive ? 'display-none' : 'registration_window' }>
            <Info />
            <Registration />
        </div>
    );
}

import React, {useContext} from 'react';
import Info from "./Info/Info";
import Registration from "./Registration/Registration";
import {Context} from "../../context";

export default function RegistrationWindow() {
    const {isActive} = useContext(Context);

    return (
        <div className={ isActive ? 'display-none' : 'registration_window' }>
            <Info />
            <Registration />
        </div>
    );
}

import React, {useContext} from 'react';
import Info from "./info/Info";
import Registration from "./registration/Registration";
import {Context} from "../../context/Context";

export default function RegistrationWindow() {
    const {isActive} = useContext(Context);

    return (
        <div className={ isActive ? 'display-none' : 'registration_window' }>
            <Info />
            <Registration />
        </div>
    );
}

import React, {useContext} from 'react';
import {Context} from "../../../context";

export default function RegistrationAuthorization() {
    const {setIsActive} = useContext(Context);

    function onDisplay() {
        setIsActive(true);
    }

    return (
        <div className='registration__authorization'>
            <div className='registration__log-in'>
                <button onClick={ onDisplay }>Увійти</button>
            </div>

            <div className='registration-divider'>
                <span>або</span>
            </div>

            <div className='registration__sing-in'>
                <button>Зареєструватись</button>
            </div>
        </div>
    );
}

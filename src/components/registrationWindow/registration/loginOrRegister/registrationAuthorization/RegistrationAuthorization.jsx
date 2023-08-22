import React, {useContext, useState} from 'react';
import ModalRegistration from "./ModalRegistration";
import {Context} from "../../../../../context/Context";

export default function RegistrationAuthorization({setUniKey}) {
    const [modal, setModal] = useState(false)
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
                <button onClick={ () => setModal(true) }>Зареєструватись</button>
            </div>

            { modal && <ModalRegistration setUniKey={setUniKey} onClose={ () => setModal(false) } /> }
        </div>
    );
}

import React, {useContext, useState} from 'react';
import ModalAddPhotos from "./ModalAddPhotos";
import {ContextOpenChat} from "../../../Context/ContextOpenChat";

export default function RegistrationAuthorization() {
    const [modal, setModal] = useState(false)
    const {setIsActive} = useContext(ContextOpenChat);

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

            { modal && <ModalAddPhotos onClose={ () => setModal(false) } /> }
        </div>
    );
}

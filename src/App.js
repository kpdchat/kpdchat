import React, {useState} from 'react';
import './styles/index.scss'
import RegistrationWindow from './components/registrationWindow/RegistrationWindow';
import WindowChat from './components/chatWindow/WindowChat';
import {Context} from './context/Context'

export default function App() {
    const [isActive, setIsActive] = useState(false);

    function onDisplay() {
        setIsActive(true)
    }

    return (
        <Context.Provider value={ {isActive, setIsActive, onDisplay} }>
            <div className='app_wrapper'>
                <RegistrationWindow />
                <WindowChat />
            </div>
        </Context.Provider>
    );
}

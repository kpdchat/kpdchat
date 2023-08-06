import React, {useState} from "react";
import './styles/index.scss'
import RegistrationWindow from "./components/registrationWindow/RegistrationWindow";
import WindowChat from "./components/chatWindow/WindowChat";
import {ContextOpenChat} from './Context/ContextOpenChat'

export default function App() {
    const [isActive, setIsActive] = useState(false);

    return (
        <ContextOpenChat.Provider value={{ isActive, setIsActive }}>
            <div className='app_wrapper'>
                <RegistrationWindow />
                <WindowChat />
            </div>
        </ContextOpenChat.Provider>
    );
}

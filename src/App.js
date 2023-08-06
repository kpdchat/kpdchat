import React, {useState} from "react";
import './styles/index.scss'
import RegistrationWindow from "./components/registrationWindow/RegistrationWindow";
import WindowChat from "./components/chatWindow/WindowChat";
import {Context} from './context'

export default function App() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Context.Provider value={{
            isActive, setIsActive
        }}>
            <div className='app_wrapper'>
                <RegistrationWindow />
                <WindowChat />
            </div>
        </Context.Provider>
    );
}

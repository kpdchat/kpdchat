import React, {useState} from "react";
import './styles/index.scss'
import RegistrationWindow from "./components/registrationWindow/RegistrationWindow";
import WindowChat from "./components/chatWindow/WindowChat";

export default function App() {
    const [isActive, setIsActive] = useState(false)


    function onDisplay() {
        setIsActive(true)
    }

    return (
        <div className='app_wrapper'>
            <RegistrationWindow onDisplay={ onDisplay } isActive={ isActive } />
            <WindowChat isActive={ isActive } />
        </div>
    );
}

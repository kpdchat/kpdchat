import React, { useState, Suspense } from "react";
import RegistrationWindow from "./components/registrationWindow/RegistrationWindow";
import WindowChat from "./components/chatWindow/WindowChat";

export default function App() {
    const [isActive, setIsActive] = useState(false)


    function onDisplay() {
        setIsActive(true)
    }

    return (
        <Suspense fallback="...loading">
            <div className='app_wrapper'>
                <RegistrationWindow onDisplay={ onDisplay } isActive={ isActive } />
                <WindowChat isActive={isActive} />
            </div>
        </Suspense>

    );
}

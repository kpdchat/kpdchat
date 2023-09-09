import React, {useEffect, useState, Suspense } from 'react';
import './styles/index.scss'
import RegistrationWindow from './components/registrationWindow/RegistrationWindow';
import WindowChat from './components/chatWindow/WindowChat';
import {Context} from './context/Context'
import { useSelector } from 'react-redux';
import { selectUi } from './store/selectors';

export default function App() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const userInLocalStorage = localStorage.getItem('user');
        if (userInLocalStorage) {
            setIsActive(true);
        }
    }, [])

    return (
        <Context.Provider value={ {isActive, setIsActive} }>
            <Suspense fallback="...loading">
                <div className='app_wrapper'>
                    <RegistrationWindow />
                    <WindowChat />
                </div>
            </Suspense>
        </Context.Provider>
    );
}

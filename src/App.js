import React, {useEffect, Suspense } from 'react';
import './styles/index.scss'
import RegistrationWindow from './components/registrationWindow/RegistrationWindow';
import WindowChat from './components/chatWindow/WindowChat';
import {useDispatch} from 'react-redux';
import {setWindowChatOpen} from './store/actions/uiActions';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const userInLocalStorage = localStorage.getItem('user');
        if (userInLocalStorage) {
            dispatch(setWindowChatOpen());
        }
        // eslint-disable-next-line
    }, [])

    return (
            <Suspense fallback="...loading">
                <div className='app_wrapper'>
                    <RegistrationWindow />
                    <WindowChat />
                </div>
            </Suspense>
    );
}

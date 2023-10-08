import React, {useEffect, Suspense } from 'react';
import RegistrationWindow from './components/registrationWindow/RegistrationWindow';
import WindowChat from './components/chatWindow/WindowChat';
import {useDispatch} from 'react-redux';
import {setWindowChatOpen} from './store/actions/uiActions';
import useTheme from './extra/hooks/useTheme';

export default function App() {
    const dispatch = useDispatch();
    const { themeChange } = useTheme();

    useEffect(() => {
        const userInLocalStorage = localStorage.getItem('user');
        if (userInLocalStorage) {
            dispatch(setWindowChatOpen());
        }
        document.documentElement.setAttribute('data-theme', themeChange);
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

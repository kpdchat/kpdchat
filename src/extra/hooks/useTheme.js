import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../store/selectors';
import {fetchUpdateUser} from '../../store/actions/userActions';
// import {theme} from '../config/theme'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export default function useTheme() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [themeChange, setThemeChange] = useState( localStorage.getItem('theme') || defaultTheme);

    // User Theme
    const themeList = {
        'light': 0,
        'dark': 1
    };

    const userTheme = themeList[themeChange];

    // Submit to Server User Theme
    async function onSubmitThemeToServer() {
        const updateUserTheme = {
            ...user,
            theme: userTheme
        }
        dispatch(fetchUpdateUser(updateUserTheme));
    }

    useLayoutEffect( () => {
        document.documentElement.setAttribute('data-theme', themeChange);
        localStorage.setItem('theme', themeChange);
    }, [themeChange])

    return {
        onSubmitThemeToServer,
        themeChange,
        setThemeChange
    }
}

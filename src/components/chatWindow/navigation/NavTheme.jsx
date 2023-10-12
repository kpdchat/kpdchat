import React from 'react';
import { PiMoon,  PiSunDim} from "react-icons/pi";
import useTheme from '../../../extra/hooks/useTheme';

export default function NavTheme() {
    const { themeChange, setThemeChange, onSubmitThemeToServer } = useTheme();

    function handleLightTheme() {
        setThemeChange('light');
    }

    function handleDarkTheme() {
        setThemeChange('dark');
    }

    return (
        <>
            <div onClick={onSubmitThemeToServer}>
                {themeChange === 'light'
                    ? <PiMoon
                        size={35}
                        className='cursor-pointer'
                        onClick={handleDarkTheme} />
                    : <PiSunDim
                        size={35}
                        className='cursor-pointer'
                        onClick={handleLightTheme} />
                }
            </div>
        </>
    );
}

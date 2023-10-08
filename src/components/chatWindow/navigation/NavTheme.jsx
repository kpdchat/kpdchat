import React from 'react';
import {MdOutlineDarkMode, MdOutlineWbSunny} from 'react-icons/md';
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
          <div onClick={ onSubmitThemeToServer }>
              { themeChange === 'light'
                  ? <MdOutlineDarkMode size={ 35 } className='cursor-pointer' onClick={handleDarkTheme}/>
                  : <MdOutlineWbSunny size={ 35 } className='cursor-pointer' onClick={handleLightTheme}/>
              }
          </div>
      </>
  );
}

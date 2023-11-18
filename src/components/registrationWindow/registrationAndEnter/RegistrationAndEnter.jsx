import React, { useState } from 'react';
import logo_kpd from '../../../images/registrationWindow/logo_kpd.png';
import LanguageButton from './languageButton/LanguageButton';
import LoginAndRegistration from './loginAndRegistration/LoginAndRegistration';
import GettingUniqueKey from './gettingUniqueKey/GettingUniqueKey';
import NavTheme from '../../chatWindow/navigation/NavTheme';
import SliderInfo from './SliderInfo';

export default function RegistrationAndEnter() {
    const [uniKey, setUniKey] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='registration'>
            <SliderInfo showInfo={showInfo} setShowInfo={setShowInfo}/>

            <div className={ `${ showInfo ? 'display-none' : 'registration__block' }` }>
                <div className='registration__block-language language'>
                    <LanguageButton />
                </div>

                <div className='registration__container'>
                    <div className='registration__block-form form'>
                        <div className='form__logo-chat'>
                            <h2><span>KPD</span>CHAT</h2>
                            <img src={ logo_kpd } alt='logo KPD Chat' />
                        </div>

                        { uniKey
                            ? <GettingUniqueKey uniKey={ uniKey } setUniKey={ setUniKey } />
                            : <LoginAndRegistration setUniKey={ setUniKey } />
                        }
                    </div>
                </div>

                <div className='registration__block-theme'>
                    <NavTheme />
                </div>
            </div>
        </div>
    );
}

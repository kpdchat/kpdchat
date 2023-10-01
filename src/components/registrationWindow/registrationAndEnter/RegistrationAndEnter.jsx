import React, {useState} from 'react';
import logo_kpd from '../../../images/registrationWindow/logo_kpd.png';
import LanguageButton from './languageButton/LanguageButton';
import LoginAndRegistration from './loginAndRegistration/LoginAndRegistration';
import GettingUniqueKey from './gettingUniqueKey/GettingUniqueKey';

export default function RegistrationAndEnter() {
    const [uniKey, setUniKey] = useState('');

    return (
        <div className='registration'>
            <div className='registration__block'>
                <div className='registration__block-language language'>
                    <LanguageButton />
                </div>

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
        </div>
    );
}

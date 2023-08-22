import React, {useState} from 'react';
import logo_kpd from '../../../images/registrationWindow/logo_kpd.png';
import LanguageButton from './languageButton/LanguageButton';
import LoginOrRegister from './loginOrRegister/LoginOrRegister';
import GettingUniqueKey from './gettingUniqueKey/GettingUniqueKey';

export default function Registration() {
    const [uniKey, setUniKey] = useState('')

    return (
        <div className='registration'>

            <div className='language-block'>
                <LanguageButton />
            </div>

            <div className='registration-block'>
                <div className='logo_chat'>
                    <h2><span>KPD</span>CHAT</h2>
                    <img src={ logo_kpd } alt='logo KPD Chat' />
                </div>

                { uniKey
                    ? <GettingUniqueKey uniKey={ uniKey } />
                    : <LoginOrRegister setUniKey={ setUniKey } />
                }
            </div>
        </div>
    );
}

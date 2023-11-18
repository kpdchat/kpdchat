import React, {useState} from 'react';
import logo_kpd from '../../../images/registrationWindow/logo_kpd.png';
import LanguageButton from './languageButton/LanguageButton';
import LoginAndRegistration from './loginAndRegistration/LoginAndRegistration';
import GettingUniqueKey from './gettingUniqueKey/GettingUniqueKey';
import NavTheme from '../../chatWindow/navigation/NavTheme';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export default function RegistrationAndEnter() {
    const [uniKey, setUniKey] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const { t } = useTranslation();
    
    function onShowInfo() {
        setShowInfo(prev => !prev)
    }

    return (
        <div className='registration'>
            <div className={`block-info ${showInfo ? 'visibleInfo' : ''}`}>
                    <div className={ `${showInfo ? 'info-block__settings info-settings' : 'display-none'} `}>
                        <div className={`info-settings__content info-content ${showInfo ? 'visibleinfo-settins' : ''}`}>
                            <div className='info-content__title'>
                                <h1>KPDCHAT</h1>
                            </div>
                            <div className='info-content__description text-inter-18-400'>
                                <p>{ t('info.welcome-text-p1') }</p>
                                <p>{ t('info.welcome-text-p2') }</p>
                            </div>
                        </div>

                        <div className='info-settings__buttons'>
                            <div className='language-settings'>
                                Змінити мову
                                <LanguageButton />
                            </div>
                            <div className='theme-settings'>
                                Змінити тему
                                <NavTheme />
                            </div>

                        </div>
                    </div>
                <div className='info-show'>
                    {showInfo
                        ? <MdOutlineKeyboardDoubleArrowUp size='24' onClick={onShowInfo} />
                        : <MdOutlineKeyboardDoubleArrowDown size='24' onClick={onShowInfo} />
                    }
                </div>
            </div>

            <div className='registration__block'>
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

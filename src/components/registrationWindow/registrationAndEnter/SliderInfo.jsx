import React from 'react';
import LanguageButton from './languageButton/LanguageButton';
import NavTheme from '../../chatWindow/navigation/NavTheme';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import logo_kpd from '../../../images/registrationWindow/logo_kpd.png';

export default function SliderInfo({ showInfo, setShowInfo }) {
    const { t } = useTranslation();

    function onShowInfo() {
        setShowInfo(prev => !prev);
    }

    return (
        <div className={ `block-info ${ showInfo ? 'visibleInfo' : '' }` }>
            <div className={ `${ showInfo ? 'info-block__settings info-settings' : 'display-none' } ` }>
                <div className={ `info-settings__content info-content ${ showInfo ? 'visibleinfo-settins' : '' }` }>
                    <div className='info-content__title'>
                        <h2><span>KPD</span>CHAT</h2>
                        <img src={ logo_kpd } alt='logo KPD Chat' />
                    </div>
                    <div className='info-content__description text-inter-18-400'>
                        <p>{ t('info.welcome-text-p1') }</p>
                        <p>{ t('info.welcome-text-p2') }</p>
                    </div>
                </div>

                <div className='info-settings__buttons'>
                    <div className='language-settings'>
                        { t('global.changeLanguage') }
                        <LanguageButton />
                    </div>
                    <div className='theme-settings'>
                        { t('global.changeTheme') }
                        <div className='theme-settings-backColor'>
                            <NavTheme />
                        </div>
                    </div>
                </div>
            </div>
            <div className='info-show cursor-pointer' onClick={ onShowInfo }>
                { showInfo
                    ? <MdOutlineKeyboardDoubleArrowUp size='24'  />
                    : <MdOutlineKeyboardDoubleArrowDown size='24' />
                }
            </div>
        </div>
    );
}

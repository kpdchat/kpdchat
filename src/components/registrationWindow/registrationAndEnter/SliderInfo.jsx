import React from 'react';
import LanguageButton from './languageButton/LanguageButton';
import NavTheme from '../../chatWindow/navigation/NavTheme';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

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
                { showInfo
                    ? <MdOutlineKeyboardDoubleArrowUp size='24' onClick={ onShowInfo } />
                    : <MdOutlineKeyboardDoubleArrowDown size='24' onClick={ onShowInfo } />
                }
            </div>
        </div>
    );
}

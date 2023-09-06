import React from 'react';
import puzzle_img from '../../../images/registrationWindow/puzzles_img.png';
import {useTranslation} from 'react-i18next';

export default function Info() {
    const { t } = useTranslation();

    return (
        <div className='info'>
            <div className='info__block'>
                <div>
                    <h1><span>KPD</span>CHAT</h1>
                    <p>{t('info.welcome-text-p1')}</p>
                    <p>{t('info.welcome-text-p2')}</p>
                </div>

                <div className='info__img'>
                    <img src={ puzzle_img } alt='' />
                </div>

                <div className='info-feature'>
                    <div className='info-feature__title'>
                        <h2>{t('info.title-h2-1')}</h2>
                        <p>{t('info.title-p-1')}</p>
                    </div>

                    <div className='info-feature__title'>
                        <h2>{t('info.title-h2-2')}</h2>
                        <p>{t('info.title-p-2')}</p>
                    </div>

                    <div className='info-feature__title'>
                        <h2>{t('info.title-h2-3')}</h2>
                        <p>{t('info.title-p-3')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

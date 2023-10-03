import React from 'react';
import puzzle_img from '../../../images/registrationWindow/puzzles_img.png';
import {useTranslation} from 'react-i18next';

export default function Info() {
    const {t} = useTranslation();

    return (
        <div className='info'>
            <div className='info__block'>
                <div className='info__block-content content'>
                    <div className='content__title'>
                        <h1><b>KPD</b>CHAT</h1>
                    </div>
                    <div className='content__description text-inter-18-400 mt-24px'>
                        <p>{ t('info.welcome-text-p1') }</p>
                        <p>{ t('info.welcome-text-p2') }</p>
                    </div>

                    <div className='content__img mt-24px'>
                        <img src={ puzzle_img } alt='welcome images' />
                    </div>

                    <div className='content__feature mt-24px'>
                        <div className='content__feature-block feature'>
                            <div className='feature__title color-yellow'>
                                <h2>{ t('info.title-h2-1') }</h2>
                            </div>
                            <div className='feature__description text-inter-18-600'>
                                <p>{ t('info.title-p-1') }</p>
                            </div>
                        </div>

                        <div className='content__feature-block feature'>
                            <div className='feature__title color-yellow'>
                                <h2>{ t('info.title-h2-2') }</h2>
                            </div>
                            <div className='feature__description text-inter-18-600'>
                                <p>{ t('info.title-p-2') }</p>
                            </div>
                        </div>

                        <div className='content__feature-block feature'>
                            <div className='feature__title color-yellow'>
                                <h2>{ t('info.title-h2-3') }</h2>
                            </div>
                            <div className='feature__description text-inter-18-600'>
                                <p>{ t('info.title-p-3') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

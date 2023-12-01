import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalClose } from '../../../../store/actions/uiActions';
import { MdOutlineClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export default function NavInfoModal() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    function onCloseClick() {
        dispatch(setModalClose());
    }

    return (
        <div className='modal-container info-about'>
            <div className='modal-container__content'>
                <div className='modal-container__header'>
                    <h2 className='text-inter-18-600'>
                        {t('infoAbout.title')}
                    </h2>
                    <MdOutlineClose
                        className='close-img cursor-pointer'
                        size='24'
                        onClick={onCloseClick}
                    />
                </div>

                <div className='info-about__description modal-container__description'>
                    <p className='text-inter-14-400'>
                        {t('infoAbout.subtitle')}
                    </p>

                    <p className='text-inter-14-400 mt-16px'>{t('infoAbout.functions')}</p>

                    <ul className='text-inter-14-400'>
                        <li>{t('infoAbout.func1')}</li>
                        <li>{t('infoAbout.func2')}</li>
                        <li>{t('infoAbout.func3')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

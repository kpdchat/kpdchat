import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineClose, MdArrowDropDown, MdArrowDropUp, MdOutlineHideImage } from 'react-icons/md';
import LoadingOnSubmitSettings from './LoadingOnSubmitSettings';
import useSettingsModalLogic from './useSettingsModalLogic';
import { mops } from '../../../../../extra/config/vocabulary/mops-icons';
import MopsAvatars from '../../../../registrationWindow/registrationAndEnter/loginAndRegistration/modalRegistration/MopsAvatars';
import { PiDoorOpen, PiTranslate } from 'react-icons/pi';
import { locales } from '../../../../../extra/config/vocabulary/locales';

export default function SettingsModal() {
    const state = useSettingsModalLogic();
    const { t } = useTranslation();

    return (
        <div className='settings__container modal-container no-select'>
            <div className='modal-container__content settings__content'>
                <div className='settings__settings'>
                    <div className='modal-container__header'>
                        <h2 className='text-inter-18-600'>
                            { t('settingsUser.settings') }
                        </h2>
                        <MdOutlineClose
                            className='close-img cursor-pointer'
                            size='24'
                            onClick={ state.onCloseWindowSettings }
                        />
                    </div>
                    <div className="modal-container__description">
                        <div className='settings__user-profile'>
                        <div className='settings__user-photo'>
                            { state.userData.profilePictureLink
                                && <img
                                    className={ state.errors.pictureLinkErr ? 'display-none' : 'user-photo' }
                                    src={ state.userData.profilePictureLink }
                                    alt='user foto'
                                />
                            }

                            <div className={ state.errors.pictureLinkErr ? 'user-photo' : 'display-none' }>
                                <MdOutlineHideImage color='#7C7C85' size='24' />
                            </div>
                        </div>

                        <div className='settings__user-data'>
                            <form onSubmit={ state.onSubmitDataToServer }>
                                <input
                                    className='text-inter-16-600'
                                    maxLength='12'
                                    type='name'
                                    value={ state.userData.nickname }
                                    onChange={ state.onChangeNicknameSettings }
                                />
                                { state.errors.nicknameErr
                                    && <p className='nickname-error'>{ t(state.errors.nicknameErr) }</p> }

                                <textarea
                                    className='text-inter-16-500 scroll-bar'
                                    maxLength='2000'
                                    value={ state.userData.profilePictureLink }
                                    rows='1'
                                    ref={ state.profilePictureLinkRef }
                                    onChange={ state.onChangeTextareaInputSettings }
                                />
                                { state.errors.pictureLinkErr
                                    && <p className='link-error'>{ t(state.errors.pictureLinkErr) }</p> }
                            </form>
                        </div>
                    </div>

                    <div className='settings__standard-avatars'>
                        <div className='standard-img cursor-pointer' onClick={ state.onShowAvatars }>
                            <h2 className='text-inter-16-400'>
                                { t('settingsUser.standartAvatars') }
                            </h2>
                            { state.showImg
                                ? <MdArrowDropUp size='28' />
                                : <MdArrowDropDown size='28' />
                            }
                        </div>

                        <div className={ state.showImg ? 'images visibility' : 'images' }>
                            { mops.map(el => <MopsAvatars
                                src={ el.src }
                                alt={ el.alt }
                                value={ state }
                                key={ `avatar-${ el.alt }` }
                                pictureLink={ state.userData.profilePictureLink }
                            />)
                            }
                        </div>
                    </div>

                    <div className='settings__user-buttons'>

                        <div className='settings__buttons-language'>
                            <div className='settings__labels labels'>
                                <div className='labels__label-language'>
                                    <PiTranslate
                                        size='24'
                                    />
                                    <p className='text-inter-14-400'>
                                        { t('settingsUser.language') }
                                    </p>
                                </div>
                            </div>

                            <div className='settings__buttons'>
                                { Object.keys(locales).map((locale) => (
                                    <label
                                        key={ locale }
                                        onClick={ () => state.handleLocaleChange(locale) }
                                        className={ state.userData.localization === locale
                                            ? 'text-inter-12-400 active'
                                            : 'text-inter-12-400 cursor-pointer'
                                        }
                                    >
                                        { locales[locale].title }

                                        <input
                                            type='radio'
                                            name='languages'
                                            value={ locales[locale].value }
                                            checked={ state.userData.localization === locale }
                                        />
                                    </label>
                                )) }
                            </div>
                        </div>

                        <div className='user__buttons-exit'>
                            <div className='settings__labels labels'>
                                <div className='labels__label-exit'>
                                    <PiDoorOpen
                                        size='24'
                                        className='cursor-pointer'
                                        onClick={ state.onExitChat }
                                    />
                                    <p className='text-inter-14-400' onClick={ state.onExitChat }>
                                        { t('settingsUser.exit') }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type='button'
                        onClick={ state.onSubmitDataToServer }
                        className={ `buttons ${
                            state.change && !(state.errors.nicknameErr || state.errors.pictureLinkErr)
                                ? 'submit-active'
                                : 'submit-inactive'
                        }` }
                    >
                        { t('settingsUser.save') }
                    </button>
                    </div>
                    
                    { state.isLoader && <LoadingOnSubmitSettings /> }

                    { state.modalExitSettings &&
                        <div className='modal-exit__settings'>
                            <div className='modal-exit__settings-content'>
                                <div className='exit-info'>
                                    <p className='text-inter-18-400'>
                                        { t('settingsUser.exitSettingsText') }
                                    </p>
                                </div>

                                <div className='exit-buttons'>
                                    <button
                                        onClick={ state.onCloseSettings }
                                        className='text-inter-18-600 cursor-pointer'
                                    >
                                        { t('settingsUser.exit') }
                                    </button>
                                    <button
                                        onClick={ state.onCloseModalExit }
                                        className='text-inter-18-600 cursor-pointer'
                                    >
                                        { t('chat-context-menu.return') }
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

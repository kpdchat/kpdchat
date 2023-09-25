import React from 'react';
import {useTranslation} from 'react-i18next';
import {MdOutlineClose, MdArrowDropDown, MdArrowDropUp, MdOutlineHideImage, MdOutlineLanguage} from 'react-icons/md';
import LoadingOnSubmitSettings from './LoadingOnSubmitSettings';
import useSettingsModalLogic from './useSettingsModalLogic';
import {mops} from '../../../../../extra/config/mops-icons';
import MopsAvatars from '../../../../registrationWindow/registrationAndEnter/loginAndRegistration/modalRegistration/MopsAvatars';
import {PiDoorOpen} from 'react-icons/pi';
import {locales} from '../../../../../extra/config/locales';

export default function SettingsModal({setIsOpen}) {
    const state = useSettingsModalLogic({setIsOpen});
    const {t} = useTranslation();

    return (
        <div className='settings__container modal-container' onClick={ state.onCloseClick }>
            <div className='settings__content' onClick={ state.onContentClick }>

                <div className='settings__settings'>
                    <div className='settings__title'>
                        <h2 className='text-inter-18-600'>{ t('settingsUser.settings') }</h2>
                        <MdOutlineClose
                            className='cursor-pointer'
                            size='24'
                            onClick={ state.onCloseClick } />
                    </div>

                    <div className='settings__user-profile'>
                        <div className='settings__user-photo'>
                            { state.profilePictureLink
                                && <img
                                    className={ state.profilePictureLinkError ? 'display-none' : 'user-photo' }
                                    src={ state.profilePictureLink }
                                    alt='user foto'
                                />
                            }

                            <div className={ state.profilePictureLinkError ? 'user-photo' : 'display-none' }>
                                <MdOutlineHideImage color='#7C7C85' size='24' />
                            </div>
                        </div>

                        <div className='settings__user-data'>
                            <form onSubmit={ state.onSubmitDataToServer }>
                                <input
                                    className='text-inter-16-600'
                                    maxLength='12'
                                    type='name'
                                    value={ state.nickname }
                                    onChange={ state.onChangeNicknameSettings }
                                    onBlur={ state.onChangeNicknameSettings }
                                />
                                { state.nicknameError
                                    && <p className='nickname-error'>{ t(state.nicknameError) }</p> }

                                <textarea
                                    className='scroll-bar'
                                    maxLength='2000'
                                    value={ state.profilePictureLink }
                                    rows='1'
                                    ref={ state.profilePictureLinkRef }
                                    onChange={ state.onChangeTextareaInputSettings }
                                    onBlur={ state.onChangeTextareaInputSettings }
                                />
                                { state.profilePictureLinkError
                                    && <p className='link-error'>{ t(state.profilePictureLinkError) }</p> }
                            </form>
                        </div>
                    </div>

                    <div className='settings__standard-avatars'>
                        <div className='standard-img cursor-pointer' onClick={ state.onShowAvatars }>
                            <h2>{ t('settingsUser.standartAvatars') }</h2>
                            { state.showImg
                                ? <MdArrowDropUp size='28' color='#38328A' />
                                : <MdArrowDropDown size='28' color='#38328A' />
                            }
                        </div>

                        <div className={ state.showImg ? 'images' : 'display-none' }>
                            { mops.map(el => <MopsAvatars
                                src={ el.src }
                                alt={ el.alt }
                                value={ state }
                                index={ el.alt }
                                key={ `avatar-${ el.alt }` } />)
                            }
                        </div>
                    </div>

                    <div className='settings__user-buttons'>

                        <div className='settings__buttons-language'>
                            <div className='settings__labels labels'>
                                <div className='labels__label-language'>
                                    <MdOutlineLanguage
                                        size='24'
                                        color='black'
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
                                        className={ state.selectedLocale === locale ? 'active' : 'cursor-pointer' }
                                        onClick={ () => state.handleLocaleChange(locale) }
                                    >
                                        { locales[locale].title }

                                        <input
                                            type='radio'
                                            name='languages'
                                            value={ locales[locale].value }
                                            checked={ state.selectedLocale === locale }
                                            onChange={ () => {
                                            } }
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
                                        color='black'
                                        className='cursor-pointer'
                                        onClick={ state.onExitChat } />
                                    <p className='text-inter-14-400' onClick={ state.onExitChat }>
                                        { t('settingsUser.exit') }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className='settings__submit cursor-pointer'
                        type='button'
                        onClick={ state.onSubmitDataToServer }
                    >
                        { t('settingsUser.save') }
                    </button>
                </div>
                { state.isLoader && <LoadingOnSubmitSettings /> }
            </div>
        </div>
    )
}

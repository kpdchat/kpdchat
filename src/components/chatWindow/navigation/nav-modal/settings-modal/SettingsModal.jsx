import React from 'react';
import {useTranslation} from 'react-i18next';
import {MdOutlineClose, MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';
import LoadingOnSubmitSettings from './LoadingOnSubmitSettings';
import useSettingsModalLogic from './useSettingsModalLogic';
import SettingsLanguages from './SettingsLanguages';
import ExitChat from './ExitChat';
import {mops} from '../../../../../extra/config/mops-icons';
import MopsAvatars from '../../../../registrationWindow/registrationAndEnter/loginAndRegistration/modalRegistration/MopsAvatars';

export default function SettingsModal() {
    const state = useSettingsModalLogic();
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
                            <img
                                className='user-photo'
                                src={ state.user.profilePictureLink }
                                alt='user foto'
                            />
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
                                { state.nicknameError && <p className='nickname-error'>{ t(state.nicknameError) }</p> }

                                <textarea
                                    className='scroll-bar'
                                    maxLength='2000'
                                    value={ state.profilePictureLink }
                                    rows='1'
                                    ref={ state.profilePictureLinkRef }
                                    onChange={ state.onChangeTextareaInputSettings }
                                    onBlur={ state.onChangeTextareaInputSettings }
                                />
                                { state.profilePictureLinkError &&
                                    <p className='link-error'>{ t(state.profilePictureLinkError) }</p> }
                            </form>
                        </div>
                    </div>

                    <div className='settings__standard-avatars'>
                        <div className='standard-img cursor-pointer' onClick={ state.onShowAvatars }>
                            <h2>{ t('settingsUser.standartAvatars') }</h2>
                            { state.showImg
                                ?
                                <MdArrowDropUp
                                    size='28'
                                    color='#38328A'
                                />
                                :
                                <MdArrowDropDown
                                    size='28'
                                    color='#38328A'
                                />
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
                        <SettingsLanguages />
                        <ExitChat  />
                    </div>

                    <button
                        className='settings__submit cursor-pointer'
                        type='submit'
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

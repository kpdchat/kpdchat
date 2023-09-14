import React, { useState} from 'react';
import {useTranslation} from 'react-i18next';
import {MdOutlineClose} from 'react-icons/md';
import {PiNotePencilFill} from 'react-icons/pi';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoader, selectUser} from '../../../../../store/selectors';
import SettingsLanguages from './SettingsLanguages';
import ExitChat from './ExitChat';
import {setLoaderHide, setLoaderShow} from '../../../../../store/actions/uiActions';
import axios from 'axios';
import LoadingOnSubmitSettings from './LoadingOnSubmitSettings';
import {fetchUser} from '../../../../../store/actions/userActions';
import i18n from 'i18next';

export default function SettingsModal({isOpen, setIsOpen}) {
    const user = useSelector(selectUser);
    const isLoader = useSelector(selectLoader);
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [isInput, setIsInput] = useState(false);
    const [editPhoto, setEditPhoto] = useState(false);
    const [nickname, setNickname] = useState(user.nickname);
    const [nicknameError, setNicknameError] = useState('');

    // Edit Nickname
    function onEditNicknameClick(e) {
        e.stopPropagation();
        if (nicknameError) return;
        setIsInput(!isInput)
    }

    // User Language
    const languageList = {
        'ua': 0,
        'en': 1
    };
    const userLanguage = languageList[i18n.language];

    // Submit To Server Data
    async function onSubmitNicknameToServer() {
        if (nicknameError) return;

        try {
            dispatch(setLoaderShow());
            const updateUser = {
                id: user.id,
                nickname,
                profilePictureLink: user.profilePictureLink,
                localization: userLanguage,
                theme: user.theme
            }
            await axios.put('https://kpdchat.onrender.com/api/users', updateUser);
            dispatch(fetchUser(user.id));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoaderHide());
        }
        setIsOpen(!isOpen); // Close window Settings User
    }

    function onContentClick(e) {
        e.stopPropagation();
    }

    function onEditPhotoClick(e) {
        e.preventDefault();
        setEditPhoto(!editPhoto);
    }

    function onCloseClick() {
        setIsOpen(!isOpen);
        setNickname(user.nickname);
    }

    // Nickname validation
    function validateNicknameSettings(value) {
        if (!value) {
            setNicknameError('registration.error-message');
        } else if (value.length < 4 || value.length > 12) {
            setNicknameError('registration.input-nickname-error');
        } else {
            setNicknameError('');
        }
    }

    function onChangeNickname(e) {
        const checkingForSpaces = e.target.value.replace(/[^a-zA-Z0-9?!_\-@^*'.,:;"{}#$%&()=+<>/|]/g, '');
        setNickname(checkingForSpaces);
        validateNicknameSettings(e.target.value);
    }

    return (
        <div className='settings__container modal-container' onClick={ onCloseClick }>
            <div className='settings__content' onClick={ onContentClick }>
                <div className='modal-title'>
                    <h2>Налаштування</h2>
                    <MdOutlineClose className='cursor-pointer'
                                    size='24'
                                    onClick={ onCloseClick } />
                </div>
                <div className='settings__settings'>
                    <div className='settings__user-profile'>
                        <img className='settings__photo cursor-pointer'
                             src={ user.profilePictureLink }
                             alt='user foto'
                             onClick={ onEditPhotoClick } />

                        { isInput
                            ? <form>
                                <input
                                    maxLength='12'
                                    type='name'
                                    value={ nickname }
                                    onChange={ onChangeNickname }
                                    onBlur={ onChangeNickname }
                                />
                                { nicknameError && <p className='nickname-error'>{ t(nicknameError) }</p> }
                            </form>
                            : <form>
                                <input
                                    readOnly
                                    className='text-inter-16-400'
                                    value={ nickname }
                                />
                            </form>
                        }
                        <PiNotePencilFill
                            className='settings__edit-name cursor-pointer'
                            onClick={ onEditNicknameClick }
                        />
                    </div>


                    { editPhoto
                        ? <div></div>

                        : <div className='settings__user-buttons'>
                            <SettingsLanguages />
                            <ExitChat isOpen={ isOpen } setIsOpen={ setIsOpen } />
                        </div>
                    }


                    <button
                        className='settings__submit cursor-pointer'
                        type='submit'
                        onClick={ onSubmitNicknameToServer }
                    >
                        { t('settingsUser.save') }
                    </button>
                </div>
                { isLoader && <LoadingOnSubmitSettings /> }
            </div>
        </div>
    )
}

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {MdOutlineClose, MdOutlineLanguage, MdEditSquare} from 'react-icons/md';
import { PiDoorOpen } from "react-icons/pi";
import {useDispatch} from 'react-redux';
import {setWindowChatClose} from '../../../../store/actions/uiActions';

const locales = {
    en: {title: 'EN'},
    ua: {title: 'UA'}
};

export default function SettingsModal({isOpen, setOpen}) {
    const [isInput, setIsInput] = useState(false);
    const dispatch = useDispatch();
    const user = localStorage.getItem('user');
    const userAvatar = JSON.parse(user);

    const {i18n, t} = useTranslation();


    function onEditClick(e) {
        e.stopPropagation();
        setIsInput(!isInput)
    }

    function onCloseClick() {
        setOpen(!isOpen);
    }

    function onContentClick(e) {
        e.stopPropagation();
    }
    
    function onExitChat() {
        localStorage.removeItem('user');
        setOpen(!isOpen);
        dispatch(setWindowChatClose())
    }

    return (
        <div className='settings__container modal-container' onClick={ onCloseClick }>
            <div className='settings__content' onClick={ onContentClick }>
                <div className='modal-title'>
                    <h2>Налаштування</h2>
                    <MdOutlineClose className='cursor-pointer' size='24' alt='close settings' onClick={ onCloseClick } />
                </div>
                <div className='settings__settings'>
                    <div className='settings__user-profile '>
                        <img className='settings__photo' src={ userAvatar.profilePictureLink } alt='user foto' />
                        { isInput ?
                            <form>
                                <input onClick={ (e) => {
                                    e.stopPropagation()
                                } } type='text' value='Artemiu@s_78' />
                            </form> : <h3 className='text-inter-16-400'>Artemiu@s_78</h3> }
                        <MdEditSquare
                            className='settings__edit-name cursor-pointer'
                            onClick={ onEditClick }
                        />
                    </div>

                    <div className='settings__user-buttons'>
                        <div className='settings__buttons-language'>
                            <div className='settings__labels labels'>
                                <div className='labels__label-language'>
                                    <MdOutlineLanguage size='24' color='black' />
                                    <p className='text-inter-14-400'>{ t('settingsUser.language') }</p>
                                </div>
                            </div>

                            <div className='settings__buttons '>
                                { Object.keys(locales).map((locale =>
                                    <button onClick={ () => i18n.changeLanguage(locale) }
                                            className={ i18n.resolvedLanguage === locale ? 'active' : 'cursor-pointer' }
                                            key={ locale }>{ locales[locale].title }</button>)) }
                            </div>
                        </div>

                        <div className='user__buttons-exit'>
                            <div className='settings__labels labels'>
                                <div className='labels__label-exit'>
                                    <PiDoorOpen size='24' color='black' className='cursor-pointer' onClick={onExitChat}/>
                                    <p className='text-inter-14-400' onClick={onExitChat}>{ t('settingsUser.exit') }</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className='settings__submit cursor-pointer'
                        type='submit'
                        onClick={ onCloseClick }
                    >
                        { t('settingsUser.save') }
                    </button>
                </div>
            </div>
        </div>
    )
}

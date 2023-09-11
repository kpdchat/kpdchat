import React from 'react';
import {MdOutlineClose} from 'react-icons/md';
import useModalRegistrationLogic from './useModalRegistrationLogic';
import MopsAvatars from './MopsAvatars';
import LoadingOnSubmitForm from './LoadingOnSubmitForm';
import {useTranslation} from 'react-i18next';

export default function ModalRegistration({onClose, setUniKey}) {
    const state = useModalRegistrationLogic({setUniKey});
    const {t} = useTranslation();

    return (
        <>
            <div className='modal__content'>

                <div className='modal__content-close'>
                    <MdOutlineClose className='close' onClick={ onClose } />
                </div>

                <form onSubmit={ state.onFormSubmit }>

                    <div className='modal__content-column'>
                        <div className='title'>{ t('registration.modal-title') }</div>

                        <div className='add-link'>
                            <input
                                maxLength='12'
                                type='name'
                                placeholder={ t('registration.input-nickname') }
                                value={ state.nickname }
                                onChange={ state.onChangeNickname }
                                onBlur={ state.onChangeNickname }
                            />
                        </div>

                        { state.nicknameError && <p className='nickname-error'>{ t(state.nicknameError) }</p> }

                        <div className='add-link'>
                        <textarea
                            maxLength='2000'
                            className={ ` scroll-bar ${ state.profilePictureLinkError ? 'invalid' : '' }` }
                            rows='1'
                            placeholder={ t('registration.input-pictureLink') }
                            ref={ state.profilePictureLinkRef }
                            value={ state.profilePictureLink }
                            onChange={ state.onChangeTextareaInput }
                            onBlur={ state.onChangeTextareaInput }
                        />
                        </div>

                        { state.profilePictureLinkError &&
                            <p className='link-error'>{ t(state.profilePictureLinkError) }</p> }

                    </div>

                    <div className='text-or'>{ t('registration.divider-span') }</div>

                    <div className='modal__content-img'>
                        { state.mops.map(el => <MopsAvatars
                            src={ el.src }
                            alt={ el.alt }
                            value={ state }
                            index={ el.alt }
                            key={ `avatar-${ el.alt }` } />)
                        }
                    </div>
                    <div className='button'>
                        <button
                            type='submit'
                            disabled={ !!state.nicknameError || !!state.profilePictureLinkError }
                        >
                            { t('registration.button-sing-up') }
                        </button>
                    </div>
                </form>
                { state.isLoading && <LoadingOnSubmitForm /> }
            </div>
        </>
    );
}

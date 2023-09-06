import React from 'react';
import {GrClose} from 'react-icons/gr'
import useModalRegistrationLogic from './useModalRegistrationLogic';
import MopsAvatars from './MopsAvatars';
import LoadingOnSubmitForm from './LoadingOnSubmitForm';
import {useTranslation} from 'react-i18next';

export default function ModalRegistration({onClose, setUniKey}) {
    const state = useModalRegistrationLogic({setUniKey});
    const { t } = useTranslation();

    return (
        <>
            <div className='modal__content'>

                <div className='modal__content-close'>
                    <GrClose className='close' onClick={ onClose }/>
                </div>

                <form onSubmit={ state.onFormSubmit }>

                    <div className='modal__content-column'>
                        <div className='title'>{ t('registration.modal-title') }</div>

                        <div className='add-link'>
                            <input
                                tabIndex='1'
                                maxLength='12'
                                type='name'
                                placeholder={ t('registration.input-nickname') }
                                value={ state.nickname }
                                onChange={ state.onChangeNickname }
                                onBlur={ state.onChangeNickname }
                            />
                        </div>

                        { state.nicknameError && <p className='nickname-error'>{ state.nicknameError }</p> }
                        { state.nicknameError && <p className='nickname-error'>{ state.nicknameLengthError }</p> }

                        <div className='add-link'>
                        <textarea
                            tabIndex='2'
                            maxLength='2000'
                            className={ ` scroll-bar ${ state.profilePictureLinkError ? 'invalid' : '' }` }
                            rows={ state.textareaRows ? 1 : 3 }
                            placeholder={ t('registration.input-pictureLink') }
                            ref={state.textareaRef}
                            onInput={state.onTextareaInput}
                            value={ state.profilePictureLink }
                            onChange={ state.onChangeImage }
                            onBlur={ state.onChangeImage }
                        />
                        </div>

                        { state.profilePictureLinkError && <p className='link-error'>{ state.profilePictureLinkError }</p> }
                        {/*{ state.profilePictureLinkError && <p className='link-error'>{ state.profilePictureLinkError }</p> }*/}

                    </div>

                    <div className='text-or'>{ t('registration.divider-span') }</div>

                    <div className='modal__content-img'>
                        { state.mops.map(el => <MopsAvatars
                            src={ el.src }
                            alt={ el.alt }
                            value={ state }
                            index={ el.alt}
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

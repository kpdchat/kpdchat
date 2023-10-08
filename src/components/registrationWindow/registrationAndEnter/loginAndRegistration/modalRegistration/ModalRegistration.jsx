import React from 'react';
import {MdOutlineClose} from 'react-icons/md';
import useModalRegistrationLogic from './useModalRegistrationLogic';
import MopsAvatars from './MopsAvatars';
import LoadingOnSubmitForm from './LoadingOnSubmitForm';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectLoader} from '../../../../../store/selectors';
import {mops} from '../../../../../extra/config/mops-icons';

export default function ModalRegistration({onClose, setUniKey}) {
    const state = useModalRegistrationLogic({setUniKey});
    const isLoader = useSelector(selectLoader);
    const {t} = useTranslation();

    return (
        <>
            <div className='authorization__modal-content content'>
                <div className='content__close'>
                    <MdOutlineClose className='close-registration-img cursor-pointer' onClick={ onClose } />
                </div>

                <form onSubmit={ state.onFormSubmit }>
                    <div className='content__form modal-form'>
                        <div className='modal-form__title'>
                            { t('registration.modal-title') }
                        </div>

                        <div className='modal-form__data'>
                            <input
                                maxLength='12'
                                type='name'
                                placeholder={ t('registration.input-nickname') }
                                value={ state.userValue.nickname }
                                onChange={ state.onChangeNickname }
                                onBlur={ state.onChangeNickname }
                            />
                        </div>

                        { state.errors.nickname && <p className='modal-form__error-message'>{ t(state.errors.nickname) }</p> }

                        <div className='modal-form__data'>
                        <textarea
                            maxLength='2000'
                            className='scroll-bar'
                            rows='1'
                            placeholder={ t('registration.input-pictureLink') }
                            ref={ state.profilePictureLinkRef }
                            value={ state.userValue.profilePictureLink }
                            onChange={ state.onChangeTextareaInput }
                            onBlur={ state.onChangeTextareaInput }
                        />
                        </div>

                        { state.errors.profilePictureLink && <p className='modal-form__error-message'>{ t(state.errors.profilePictureLink) }</p> }
                    </div>

                    <div className='content__text-or'>{ t('registration.divider-span') }</div>

                    <div className='content__img'>
                        { mops.map(el => <MopsAvatars
                            src={ el.src }
                            alt={ el.alt }
                            value={ state }
                            key={ `avatar-${ el.alt }` }
                            pictureLink={ state.userValue.profilePictureLink }
                        />)
                        }
                    </div>
                    <div className='content__button'>
                        <button
                            type='submit'
                            disabled={ !!state.errors.nickname || !!state.errors.profilePictureLink }
                        >
                            { t('registration.button-sing-up') }
                        </button>
                    </div>
                </form>
                { isLoader && <LoadingOnSubmitForm /> }
            </div>
        </>
    );
}

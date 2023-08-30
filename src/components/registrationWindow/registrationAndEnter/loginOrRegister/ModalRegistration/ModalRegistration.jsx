import React from 'react';
import {GrClose} from 'react-icons/gr'
import useModalRegistrationLogic from './useModalRegistrationLogic';
import MopsAvatars from './MopsAvatars';
import LoadingOnFormSubmit from './LoadingOnFormSubmit';

export default function ModalRegistration({onClose, setUniKey}) {
    const state = useModalRegistrationLogic({setUniKey});

    return (
        <>
            <div className='modal-background' onClick={ onClose }></div>
            <div className='modal__content'>

                <div className='modal__content-close'>
                    <GrClose className='close' onClick={ onClose }/>
                </div>

                <form onSubmit={ state.onFormSubmit }>

                    <div className='modal__content-column'>
                        <div className='title'>Створити обліковий запис</div>

                        <div className='add-link'>
                            <input
                                tabIndex='1'
                                maxLength='12'
                                type='name'
                                placeholder='Нікнейм'
                                value={ state.nickname }
                                onChange={ state.onChangeNickname }
                                onBlur={ state.onChangeNickname }
                            />
                        </div>

                        <p className='nickname-error'>{ state.nicknameError }</p>

                        <div className='add-link'>
                        <textarea
                            tabIndex='2'
                            maxLength='2000'
                            className={ ` scroll-bar ${ state.profilePictureLinkError ? 'invalid' : '' }` }
                            rows='1'
                            placeholder='Посилання на фото'
                            ref={state.textareaRef}
                            onInput={state.onTextareaInput}
                            value={ state.profilePictureLink }
                            onChange={ state.onChangeImage }
                            onBlur={ state.onChangeImage }
                        />
                        </div>

                        <p className='link-error'>{ state.profilePictureLinkError }</p>
                    </div>

                    <div className='text-or'>або</div>

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
                            Зареєструватися
                        </button>
                    </div>
                </form>
                { state.isLoading && <LoadingOnFormSubmit /> }
            </div>
        </>
    );
}

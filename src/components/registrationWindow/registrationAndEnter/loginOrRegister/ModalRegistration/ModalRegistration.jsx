import React from 'react';
import close from '../../../../../images/registrationWindow/close.svg';
import useModalRegistrationLogic from './useModalRegistrationLogic';
import MopsAvatars from './MopsAvatars';
import LoadingOnFormSubmit from './LoadingOnFormSubmit';

// Array avatars Mops
const mops = [
    {src: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', alt: 'Mops1'},
    {src: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', alt: 'Mops2'},
    {src: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80', alt: 'Mops3'},
    {src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', alt: 'Mops4'},
    {src: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', alt: 'Mops5'},
]

export default function ModalRegistration({onClose, setUniKey}) {
    const state = useModalRegistrationLogic({setUniKey});

    return (
        <>
            <div className='modal-background' onClick={ onClose }></div>
            <div className='modal__content'>

                <div className='modal__content-close'>
                    <img src={ close } alt='close modal' onClick={ onClose } />
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
                            value={ state.profilePictureLink }
                            onChange={ state.onChangeImage }
                            onBlur={ state.onChangeImage }
                        />
                        </div>

                        <p className='link-error'>{ state.profilePictureLinkError }</p>
                    </div>

                    <div className='text-or'>або</div>

                    <div className='modal__content-img'>
                        { mops.map(el => <MopsAvatars
                            src={ el.src }
                            alt={ el.alt }
                            value={ state }
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

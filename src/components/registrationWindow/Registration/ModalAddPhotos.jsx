import React, {useEffect, useState} from 'react';
import close from '../../../images/RegistrationWindow/close.svg'

export default function ModalAddPhotos({onClose}) {
    const [nickname, setNickname] = useState('')
    const [nicknameError, setNicknameError] = useState('')
    const [profileImageLink, setProfileImageLink] = useState('')
    const [profileImageLinkError, setProfileImageLinkError] = useState('')
    const [validSubmit, setValidSubmit] = useState(false)

    useEffect(() => {
        if (nicknameError || profileImageLinkError) {
            setValidSubmit(false)
        } else {
            setValidSubmit(true)
        }

    }, [nicknameError, profileImageLinkError])

    function onFormSubmit(e) {
        e.preventDefault()

        const answer = {
            nickname: nickname,
            profilePictureLink: profileImageLink
        }

        console.log(answer);
        setNickname('')
        setProfileImageLink('')
    }

    function handleNicknameChange(e) {
        setNickname(e.target.value)
        if (!e.target.value) {
            setNicknameError('Це поле обов\'язкове для заповнення')
        } else if (e.target.value.length < 4 || e.target.value.length > 12) {
            setNicknameError('Не меньше 4 і не більше 12 символів')
        }
        else {
            setNicknameError('')
        }
    }

    function handleImageChange(e) {
        setProfileImageLink(e.target.value)
        if (!e.target.value) {
            setProfileImageLinkError('Це поле обов\'язкове для заповнення')
        } else if (e.target.value.length > 2000) {
            setProfileImageLinkError('Не більше 2000 символів')
        } else {
            setProfileImageLinkError('')
        }
    }

    function handleImageUrl(url) {
        setProfileImageLink(url);
    }

    return (
        <>
            <div className='modal-background' onClick={ onClose }></div>
            <div className='modal__content'>

                <div className='modal__content-close'>
                    <img src={ close } alt='close modal' onClick={ onClose } />
                </div>

                <form onSubmit={ onFormSubmit }>

                    <div className='modal__content-column'>
                        <div className='title'>Створити обліковий запис</div>

                        <div className='add-link'>
                            <input
                                tabIndex='1'
                                minLength='4'
                                maxLength='12'
                                type='text'
                                placeholder='Нікнейм'
                                value={ nickname }
                                onChange={ handleNicknameChange }
                            />
                        </div>

                        <p className='nickname-error'>{nicknameError}</p>

                        <div className='add-link'>
                        <textarea
                            tabIndex='2'
                            maxLength='2000'
                            className='scroll-bar'
                            rows='1'
                            placeholder='Посилання на фото'
                            value={ profileImageLink }
                            onChange={ handleImageChange }
                        />
                        </div>

                        <p className='link-error'>{profileImageLinkError}</p>

                    </div>

                    <div className='or'>або</div>

                    <div className='modal__content-img'>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                                alt='Mops1'
                                onClick={ () => handleImageUrl('https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                                alt='Mops2'
                                onClick={ () => handleImageUrl('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80'
                                alt='Mops3'
                                onClick={ () => handleImageUrl('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                                alt='Mops4'
                                onClick={ () => handleImageUrl('https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                                alt='Mops5'
                                onClick={ () => handleImageUrl('https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80') } />
                        </div>
                    </div>
                    <div className='button'>
                        <button
                            type='submit'
                            disabled={!validSubmit}
                        >
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

import React, {useEffect, useState} from 'react';
import close from '../../../../../images/registrationWindow/close.svg';
import axios from 'axios';

export default function ModalRegistration({onClose, setUniKey}) {
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [profilePictureLink, setProfilePictureLink] = useState('');
    const [profileImageLinkError, setProfileImageLinkError] = useState('');
    const [validSubmit, setValidSubmit] = useState(false);

    // Nickname validation
    function handleNicknameChange(e) {
        setNickname(e.target.value);

        if (!e.target.value) {
            setNicknameError('Це поле обов\'язкове для заповнення')
        } else if (e.target.value.length < 4 || e.target.value.length > 12) {
            setNicknameError('Не меньше 4 і не більше 12 символів, без пробілів')
        } else {
            setNicknameError('')
        }
    }

    // Link Validation
    function handleImageChange(e, validate) {

        setProfilePictureLink(e.target.value);

        if (e.target.value) {
            setProfileImageLinkError('')
            if (validate) {
                axios.get(e.target.value)
                    .then(() => {
                        setProfileImageLinkError('')
                    })
                    .catch(() => setProfileImageLinkError('Url не коректний'))
            }
        } else {
            setProfileImageLinkError('Це поле обов\'язкове для заповнення')
        }
    }

    // Insert Dog Links
    function onePickAvatar(url) {
        setProfilePictureLink(url);
    }


    // Submitting form data
    async function onFormSubmit(e) {
        e.preventDefault();
        if (!nickname.trim() || !profilePictureLink.trim()) {
            handleNicknameChange(nickname);
            handleImageChange(profilePictureLink)
            return;
        }

        try {
            const {data} = await axios.post('https://kpdchat.onrender.com/api/users/register', {
                nickname,
                profilePictureLink,
            })
            setUniKey(data.uniKey)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    // Form validation
    useEffect(() => {
        if (nicknameError || profileImageLinkError) {
            setValidSubmit(false)
        } else if (nickname.length === 0 || profilePictureLink.length === 0) {
            setValidSubmit(false)
        } else {
            setValidSubmit(true)
        }

    }, [nicknameError, nickname.length, profileImageLinkError, profilePictureLink.length])

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
                                maxLength='12'
                                type='name'
                                placeholder='Нікнейм'
                                value={ nickname }
                                onChange={ handleNicknameChange }
                            />
                        </div>

                        <p className='nickname-error'>{ nicknameError }</p>

                        <div className='add-link'>
                        <textarea
                            tabIndex='2'
                            maxLength='2000'
                            className='scroll-bar'
                            rows='1'
                            placeholder='Посилання на фото'
                            value={ profilePictureLink }
                            onChange={ handleImageChange }
                        />
                        </div>

                        <p className='link-error'>{ profileImageLinkError }</p>

                    </div>

                    <div className='or'>або</div>

                    <div className='modal__content-img'>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                                alt='Mops1'
                                onClick={ () => onePickAvatar('https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                                alt='Mops2'
                                onClick={ () => onePickAvatar('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80'
                                alt='Mops3'
                                onClick={ () => onePickAvatar('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                                alt='Mops4'
                                onClick={ () => onePickAvatar('https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80') } />
                        </div>
                        <div className='img'>
                            <img
                                src='https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                                alt='Mops5'
                                onClick={ () => onePickAvatar('https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80') } />
                        </div>
                    </div>
                    <div className='button'>
                        <button
                            type='submit'
                            disabled={ !validSubmit }
                        >
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

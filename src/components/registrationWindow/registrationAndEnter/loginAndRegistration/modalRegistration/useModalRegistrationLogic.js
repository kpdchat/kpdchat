import {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoaderHide, setLoaderShow} from '../../../../../store/actions/uiActions';

export default function useModalRegistrationLogic({setUniKey}) {
    // Array avatars Mops
    const mops = [
        {src: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', alt: 'Mops1'},
        {src: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', alt: 'Mops2'},
        {src: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80', alt: 'Mops3'},
        {src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', alt: 'Mops4'},
        {src: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', alt: 'Mops5'},
    ];

    // States
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [profilePictureLink, setProfilePictureLink] = useState('');
    const [profilePictureLinkError, setProfilePictureLinkError] = useState('');
    const profilePictureLinkRef = useRef();
    const [activeDogImg, setActiveDogImg] = useState(null);
    const dispatch = useDispatch();

    // Nickname validation
    function validateNickname(value) {
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
        validateNickname(e.target.value);
    }

    // Link Validation
    function validateImageValue(value) {
        setProfilePictureLinkError('');
        if (!value) {
            setProfilePictureLinkError('registration.error-message');
        }
    }

    async function validateImageOnServer(url) {
        try {
            const response = await axios.head(url, {
                timeout: 10000,
            });

            if (response.status !== 200 || !response.headers['content-type'].includes('image')) {
                setProfilePictureLinkError('registration.input-pictureLink-error');
                return false;
            }
            return true;
        } catch (error) {
            setProfilePictureLinkError('registration.input-pictureLink-error');
            return false;
        }
    }

    function onChangeTextareaInput(e) {
        setProfilePictureLink(e.target.value);
        validateImageValue(e.target.value);
    }

    // Insert Dog Links
    function onePickAvatar(url, index) {
        setProfilePictureLink(url);
        setActiveDogImg(index);
        setProfilePictureLinkError('');
    }

    // Submitting form data
    async function onFormSubmit(e) {
        e.preventDefault();
        if (nicknameError || profilePictureLinkError) return;

        try {
            dispatch(setLoaderShow());
            const imageIsValid = await validateImageOnServer(profilePictureLink);
            if (imageIsValid) {
                const {data} = await axios.post('https://kpdchat.onrender.com/api/users/register', {
                    nickname: nickname,
                    profilePictureLink: profilePictureLink,
                })
                setUniKey(data.uniqueKey);
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoaderHide());
        }
    }

    useEffect(() => {
        profilePictureLinkRef.current.style.height = 'auto';
        profilePictureLinkRef.current.style.height = profilePictureLinkRef.current.scrollHeight + 10 + 'px';
    }, [profilePictureLink]);

    return {
        nickname,
        setNickname,
        nicknameError,
        setNicknameError,
        profilePictureLink,
        setProfilePictureLink,
        profilePictureLinkError,
        setProfilePictureLinkError,
        activeDogImg,
        mops,
        profilePictureLinkRef,
        onChangeNickname,
        onChangeTextareaInput,
        onePickAvatar,
        onFormSubmit,
    }
}

import {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoaderHide, setLoaderShow} from '../../../../../store/actions/uiActions';
import {validateImageOnServer} from '../../../../../extra/config/validateImageOnServer';

export default function useModalRegistrationLogic({setUniKey}) {
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

    // Change Nickname User
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

    // Change Users Link in Textarea
    async function onChangeTextareaInput(e) {
        setProfilePictureLink(e.target.value);
        validateImageValue(e.target.value);

        if (e.target.value && (await validateImageOnServer(e.target.value))) {

        } else {
            setProfilePictureLinkError('registration.input-pictureLink-error');
        }
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
        profilePictureLinkRef,
        onChangeNickname,
        onChangeTextareaInput,
        onePickAvatar,
        onFormSubmit,
    }
}

import {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoaderHide, setLoaderShow} from '../../../../../store/actions/uiActions';
import {validateImageOnServer} from '../../../../../extra/config/functions/validateImageOnServer';

export default function useModalRegistrationLogic({setUniKey}) {
    const [userValue, setUserValue] = useState({
        nickname: '',
        profilePictureLink: ''
    });
    const [errors, setErrors] = useState({
        nickname: '',
        profilePictureLink: ''
    });
    const profilePictureLinkRef = useRef();
    const dispatch = useDispatch();

    // Nickname validation
    function validateNickname(value) {
        if (!value) {
            setErrors({...errors, nickname: 'registration.error-message'});
        } else if (value.length < 4 || value.length > 12) {
            setErrors({...errors, nickname: 'registration.input-nickname-error'});
        } else {
            setErrors({...errors, nickname: ''});
        }
    }

    // Change Nickname User
    function onChangeNickname(e) {
        const checkingForSpaces = e.target.value.replace(/[^a-zA-Z0-9?!_\-@^*'.,:;"{}#$%&()=+<>/|]/g, '');
        setUserValue({...userValue, nickname: checkingForSpaces});
        validateNickname(e.target.value);
    }

    // Change Users Link in Textarea
    async function onChangeTextareaInput(e) {
        setUserValue({...userValue, profilePictureLink: e.target.value});

        if (e.target.value && (await validateImageOnServer(e.target.value))) {
            setErrors({...errors, profilePictureLink: ''});
        } else if (!e.target.value) {
            setErrors({...errors, profilePictureLink: 'registration.error-message'});
        } else {
            setErrors({...errors, profilePictureLink: 'registration.input-pictureLink-error'});
        }
    }

    // Insert Dog Links
    function onePickAvatar(url) {
        setUserValue({...userValue, profilePictureLink: url});
        setErrors({...errors, profilePictureLink: ''});
    }

    // Submitting form data
    async function onFormSubmit(e) {
        e.preventDefault();
        if (errors.nickname || errors.profilePictureLink) return;

        try {
            dispatch(setLoaderShow());
            const imageIsValid = await validateImageOnServer(userValue.profilePictureLink);
            if (imageIsValid) {
                const {data} = await axios.post('https://kpdchat.onrender.com/api/users/register', {
                    nickname: userValue.nickname,
                    profilePictureLink: userValue.profilePictureLink,
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
    }, [userValue.profilePictureLink]);

    return {
        userValue,
        errors,
        profilePictureLinkRef,
        onChangeNickname,
        onChangeTextareaInput,
        onePickAvatar,
        onFormSubmit,
    }
}

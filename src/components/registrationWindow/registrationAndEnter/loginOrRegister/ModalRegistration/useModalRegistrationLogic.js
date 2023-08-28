import {useState} from 'react';
import axios from 'axios';

export default function useModalRegistrationLogic({setUniKey}) {
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [profilePictureLink, setProfilePictureLink] = useState('');
    const [profilePictureLinkError, setProfilePictureLinkError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    // Nickname validation
    const validateNickname = (value) => {
        if (!value) {
            setNicknameError('Це поле обов\'язкове для заповнення')
        } else if (value.length < 4 || value.length > 12) {
            setNicknameError('Не меньше 4 і не більше 12 символів, без пробілів')
        } else {
            setNicknameError('')
        }
    }

    const onChangeNickname = (e) => {
        const checkingForSpaces = e.target.value.replace(/\s/g, '');
        setNickname(checkingForSpaces)
        validateNickname(e.target.value)
    }

    // Link Validation
    const validateImageValue = (value) => {
        setProfilePictureLinkError('')

        if (!value) {
            setProfilePictureLinkError('Це поле обов\'язкове для заповнення')
        }
    }

    const validateImageOnServer = async (url) => {
        try {
            const response = await axios.head(url, {
                timeout: 10000,
            });

            if (response.status !== 200 || !response.headers['content-type'].includes('image')) {
                setProfilePictureLinkError('Url не коректний');
                return false;
            }
            return true;
        } catch (error) {
            setProfilePictureLinkError('Url не коректний');
            return false;
        }
    }

    const onChangeImage = (e) => {
        setProfilePictureLink(e.target.value);
        validateImageValue(e.target.value);
    }

    // Insert Dog Links
    const onePickAvatar = (url) => {
        setProfilePictureLink(url);
        setProfilePictureLinkError('')
    }

    // Submitting form data
    async function onFormSubmit(e) {
        e.preventDefault();
        if (nicknameError || profilePictureLinkError) return;

        try {
            setIsLoading(true)
            const imageIsValid = await validateImageOnServer(profilePictureLink);
            if (imageIsValid) {
                const {data} = await axios.post('https://kpdchat.onrender.com/api/users/register', {
                    nickname: nickname,
                    profilePictureLink: profilePictureLink,
                })
                setUniKey(data) //(data.uniqueKey)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        nickname,
        setNickname,
        nicknameError,
        setNicknameError,
        profilePictureLink,
        setProfilePictureLink,
        profilePictureLinkError,
        setProfilePictureLinkError,
        isLoading,
        onChangeNickname,
        onChangeImage,
        onePickAvatar,
        onFormSubmit,
    }
}

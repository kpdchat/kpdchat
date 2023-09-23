import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoader, selectUser} from '../../../../../store/selectors';
import i18n from 'i18next';
import {setLoaderHide, setLoaderShow} from '../../../../../store/actions/uiActions';
import axios from 'axios';
import {fetchUser} from '../../../../../store/actions/userActions';

export default function useSettingsModalLogic({isOpen, setIsOpen}) {
    const user = useSelector(selectUser);
    console.log(user);
    const isLoader = useSelector(selectLoader);
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState(user.nickname);
    const [nicknameError, setNicknameError] = useState('');
    const [profilePictureLink, setProfilePictureLink] = useState(user.profilePictureLink);
    const [profilePictureLinkError, setProfilePictureLinkError] = useState('');
    const [activeDogImg, setActiveDogImg] = useState(null);
    const [showImg, setShowImg] = useState(false);
    const profilePictureLinkRef = useRef();

    function onContentClick(e) {
        e.stopPropagation();
    }

    // Close Window Settings
    function onCloseClick() {
        setIsOpen(!isOpen); // Close window Settings User
        setNickname(user.nickname);
    }

    // Nickname validation
    function validateNicknameSettings(value) {
        if (!value) {
            setNicknameError('registration.error-message');
        } else if (value.length < 4 || value.length > 12) {
            setNicknameError('registration.input-nickname-error');
        } else {
            setNicknameError('');
        }
    }

    // Change Nickname User
    function onChangeNicknameSettings(e) {
        const checkingForSpaces = e.target.value.replace(/[^a-zA-Z0-9?!_\-@^*'.,:;"{}#$%&()=+<>/|]/g, '');
        setNickname(checkingForSpaces);
        validateNicknameSettings(e.target.value);
    }

    // Change Avatar User
    function validateImageValueSettings(value) {
        setProfilePictureLinkError('');
        if (!value) {
            setProfilePictureLinkError('registration.error-message');
        }
    }

    async function validateImageOnServerSettings(url) {
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

    function onChangeTextareaInputSettings(e) {
        setProfilePictureLink(e.target.value);
        validateImageValueSettings(e.target.value);
    }

    // Insert Dog Links
    function onePickAvatar(url, index) {
        setProfilePictureLink(url);
        setActiveDogImg(index);
        setProfilePictureLinkError('');
    }

    // Show Standarts Avatars
    function onShowAvatars() {
        setShowImg(!showImg);
    }

    // User Language
    const languageList = {
        'ua': 0,
        'en': 1
    };
    const userLanguage = languageList[i18n.language];

    // Submit To Server Data
    async function onSubmitDataToServer() {
        if (nicknameError || profilePictureLinkError) return;

        try {
            dispatch(setLoaderShow());
            const imageSettingsIsValid = await validateImageOnServerSettings(profilePictureLink);
            if (imageSettingsIsValid) {
                const updateUser = {
                    id: user.id,
                    nickname,
                    profilePictureLink,
                    localization: userLanguage,
                    theme: user.theme
                }
                await axios.put('https://kpdchat.onrender.com/api/users', updateUser);
                dispatch(fetchUser(user.id));
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoaderHide());
        }
    }

    useEffect(() => {
        profilePictureLinkRef.current.style.height = 'auto';
        profilePictureLinkRef.current.style.height = profilePictureLinkRef.current.scrollHeight + 4 + 'px';
    }, [profilePictureLink]);

    return {
        onCloseClick,
        onContentClick,
        onChangeNicknameSettings,
        onSubmitDataToServer,
        onChangeTextareaInputSettings,
        onePickAvatar,
        onShowAvatars,
        user,
        nickname,
        nicknameError,
        profilePictureLink,
        profilePictureLinkError,
        activeDogImg,
        showImg,
        profilePictureLinkRef,
        isLoader
    }
}

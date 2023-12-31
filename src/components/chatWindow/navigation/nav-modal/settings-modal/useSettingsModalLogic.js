import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoader, selectUser} from '../../../../../store/selectors';
import i18n from 'i18next';
import {setLoaderHide, setLoaderShow, setModalClose, setWindowChatClose} from '../../../../../store/actions/uiActions';
import {locales} from '../../../../../extra/config/vocabulary/locales';
import {validateImageOnServer} from '../../../../../extra/config/functions/validateImageOnServer';
import {fetchUpdateUser, setStopFetch} from '../../../../../store/actions/userActions';

export default function useSettingsModalLogic() {
    const user = useSelector(selectUser);
    const isLoader = useSelector(selectLoader);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        nickname: user.nickname,
        profilePictureLink: user.profilePictureLink,
        localization: i18n.resolvedLanguage,
    });
    const [errors, setErrors] = useState({
        nicknameErr: '',
        pictureLinkErr: ''
    });
    const [showImg, setShowImg] = useState(false);
    const profilePictureLinkRef = useRef();
    const [change, setChange] = useState(false);
    const [modalExitSettings, setModalExitSettings] = useState(false);

    // Language User Change
    function handleLocaleChange(locale) {
        setUserData({...userData, localization: locale});
        setChange(true);
    }

    // Close Window Settings
    function onCloseWindowSettings() {
        if (!change) {
            dispatch(setModalClose()); // Close window Settings User
            setUserData({...userData, nickname: user.nickname});
            setChange(false);
            return;
        }
        setModalExitSettings(true);
    }

    // Close Window Modal Exit and Window Settings
    function onCloseSettings() {
        dispatch(setModalClose()); // Close window Settings User
        setUserData({...userData, nickname: user.nickname});
        setChange(false);
    }

    // Back to Window Settings
    function onCloseModalExit() {
        setModalExitSettings(false);
    }

    // Nickname validation
    function validateNicknameSettings(value) {
        if (!value) {
            setErrors({...errors, nicknameErr: 'registration.error-message'});
        } else if (value.length < 4 || value.length > 12) {
            setErrors({...errors, nicknameErr: 'registration.input-nickname-error'});
        } else {
            setErrors({...errors, nicknameErr: ''});
        }
    }

    // Change Nickname User
    function onChangeNicknameSettings(e) {
        const checkingForSpaces = e.target.value.replace(/[^a-zA-Z0-9?!_\-@^*'.,:;"{}#$%&()=+<>/|]/g, '');
        setUserData({...userData, nickname: checkingForSpaces});
        validateNicknameSettings(e.target.value);
        setChange(true);
    }

    // Change Users Link in Textarea
    async function onChangeTextareaInputSettings(e) {
        setUserData({...userData, profilePictureLink: e.target.value});
        dispatch(setLoaderShow());
        setChange(true);

        if (e.target.value && (await validateImageOnServer(e.target.value))) {
            setErrors({...errors, pictureLinkErr: ''});
            dispatch(setLoaderHide());
        } else if (!e.target.value) {
            setErrors({...errors, pictureLinkErr: 'registration.error-message'});
            dispatch(setLoaderHide());
        } else {
            setErrors({...errors, pictureLinkErr: 'registration.input-pictureLink-error'});
            dispatch(setLoaderHide());
        }
    }

    // Insert Dog Links
    function onePickAvatar(url) {
        setUserData({...userData, profilePictureLink: url});
        setChange(true);
        setErrors({...errors, pictureLinkErr: ''});
    }

    // Show Standarts Avatars
    function onShowAvatars() {
        setShowImg(!showImg);
    }

    // Exit Chat
    function onExitChat() {
        localStorage.removeItem('user');
        dispatch(setStopFetch());
        dispatch(setModalClose());
        dispatch(setWindowChatClose())
    }

    // Submit To Server Data
    async function onSubmitDataToServer() {
        if (!change || errors.nicknameErr || errors.pictureLinkErr) return;

        const updateUser = {
            ...user,
            nickname: userData.nickname,
            profilePictureLink: userData.profilePictureLink,
            localization: locales[userData.localization].value
        }

        dispatch(fetchUpdateUser(updateUser));
        setChange(false);
    }

    useEffect(() => {
        profilePictureLinkRef.current.style.height = 'auto';
        profilePictureLinkRef.current.style.height = profilePictureLinkRef.current.scrollHeight + 4 + 'px';
    }, [userData.profilePictureLink]);

    return {
        onCloseWindowSettings,
        onChangeNicknameSettings,
        onSubmitDataToServer,
        onChangeTextareaInputSettings,
        onePickAvatar,
        onShowAvatars,
        onExitChat,
        handleLocaleChange,
        onCloseSettings,
        onCloseModalExit,
        user,
        userData,
        errors,
        showImg,
        profilePictureLinkRef,
        isLoader,
        change,
        modalExitSettings
    }
}

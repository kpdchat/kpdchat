import { useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoaderHide, setLoaderShow, setWindowChatOpen} from '../../../../store/actions/uiActions';
import {useTranslation} from 'react-i18next';

export default function useLoginAndRegistrationLogic() {
    const [uniKey, setUniKey] = useState('');
    const [uniKeyError, setUniKeyError] = useState('');
    const [modal, setModal] = useState(false);
    const uniKeyRef = useRef();
    const dispatch = useDispatch();

    // Validation Uniquekey
    function uniKeyValidate(value) {
        setUniKeyError('');
        if (!value) {
            setUniKeyError('registration.error-message');
        }
    }

    // Close and Reset UnikeyError after close ModalRegistration components
    function resetUnikey() {
        setUniKeyError('');
        setModal(false);
    }

    function onChangeUniqueKey(e) {
        setUniKey(e.target.value);
        uniKeyValidate(e.target.value);
    }

    // Validation UniqueKey On Server
    async function validateUnikeyOnServer(key) {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                uniquekey: key,
            });
            if (response.status !== 200) {
                setUniKeyError('registration.input-unikey-error');
                return false;
            }
            return true;
        } catch (error) {
            setUniKeyError('registration.input-unikey-error');
            return false;
        }
    }

    // User Language
    const {i18n} = useTranslation();
    const languageList = {
        'ua': 0,
        'en': 1
    };
    const userLanguage = languageList[i18n.language];

    // Submit UniqueKey
    async function onUniqueKeySubmit(e) {
        e.preventDefault();
        if (uniKeyError) return;
        if (uniKey.trim() === '') {
            setUniKeyError('registration.error-message');
        } else {
            try {
                dispatch(setLoaderShow());
                const validateKey = await validateUnikeyOnServer(uniKey);
                if (validateKey) {
                    const {data} = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                        uniqueKey: uniKey,
                    });
                    const updateUser = {
                        id: data.id,
                        nickname: data.nickname,
                        profilePictureLink: data.profilePictureLink,
                        localization: userLanguage,
                        theme: data.theme
                    }
                    await axios.put('https://kpdchat.onrender.com/api/users', updateUser);
                    localStorage.setItem('user', JSON.stringify(data));
                    dispatch(setWindowChatOpen());
                }
            } catch (e) {
                console.log(e)
            } finally {
                dispatch(setLoaderHide());
            }
        }
    }

    useEffect(() => {
        uniKeyRef.current.style.height = 'auto';
        uniKeyRef.current.style.height = uniKeyRef.current.scrollHeight + 5 + 'px';
    }, [uniKey]);

    return {
        uniKey,
        uniKeyError,
        uniKeyRef,
        modal,
        setModal,
        onChangeUniqueKey,
        onUniqueKeySubmit,
        resetUnikey,
    }
}

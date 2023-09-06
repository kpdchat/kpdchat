import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../../context/Context';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

export default function useLoginAndRegistrationLogic() {
    const [uniKey, setUniKey] = useState('');
    const [uniKeyError, setUniKeyError] = useState('');
    const [notFoundUserError, setNotFoundUserError] = useState('');
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {setIsActive} = useContext(Context);
    const { t, i18n } = useTranslation();

    // Update text Error
    const updateUniKeyError = () => {
        setUniKeyError('');
        setNotFoundUserError('');
        if (uniKey && !uniKey.trim()) {
            setUniKeyError(t('registration.error-message'));
        }
    }

    useEffect( () => {
        updateUniKeyError();
    }, [i18n.language]);

    // Validation Uniquekey
    const uniKeyValidate = (value) => {
        setUniKeyError('');
        if (!value) {
            setUniKeyError(t('registration.error-message'));
        }
    }

    const onChangeUniqueKey = (e) => {
        setUniKey(e.target.value);
        uniKeyValidate(e.target.value);
    }

    // Validation UniqueKey On Server
    const validateUnikeyOnServer = async (key) => {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                uniquekey: key,
            });
            if (response.status !== 200) {
                setNotFoundUserError(t('registration.input-unikey-error'));
                return false;
            }
            return true;
        } catch (error) {
            setNotFoundUserError(t('registration.input-unikey-error'));
            return false;
        }
    }

    // Submit UniqueKey
    const onUniqueKeySubmit = async (e) => {
        e.preventDefault();
        if (uniKeyError) return;
        if (uniKey.trim() === '') {
            setUniKeyError(t('registration.error-message'));
        } else {
            try {
                setIsLoading(true);
                const validateKey = await validateUnikeyOnServer(uniKey);
                if (validateKey) {
                    const {data} = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                        uniqueKey: uniKey,
                    })
                    console.log(data);
                    localStorage.setItem('user', JSON.stringify(data));
                    setIsActive(true);
                }
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
    }

    return {
        uniKey,
        uniKeyError,
        notFoundUser: notFoundUserError,
        modal,
        setModal,
        isLoading,
        onChangeUniqueKey,
        onUniqueKeySubmit,
    }
}

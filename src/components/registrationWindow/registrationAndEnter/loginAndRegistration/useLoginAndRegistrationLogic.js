import {useContext, useEffect, useRef, useState} from 'react';
import {Context} from '../../../../context/Context';
import axios from 'axios';

export default function useLoginAndRegistrationLogic() {
    const [uniKey, setUniKey] = useState('');
    const [uniKeyError, setUniKeyError] = useState('');
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const uniKeyRef = useRef();
    const {setIsActive} = useContext(Context);

    // Validation Uniquekey
    const uniKeyValidate = (value) => {
        setUniKeyError('');
        if (!value) {
            setUniKeyError('registration.error-message');
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
                setUniKeyError('registration.input-unikey-error');
                return false;
            }
            return true;
        } catch (error) {
            setUniKeyError('registration.input-unikey-error');
            return false;
        }
    }

    // Submit UniqueKey
    const onUniqueKeySubmit = async (e) => {
        e.preventDefault();
        if (uniKeyError) return;
        if (uniKey.trim() === '') {
            setUniKeyError('registration.error-message');
        } else {
            try {
                setIsLoading(true);
                const validateKey = await validateUnikeyOnServer(uniKey);
                if (validateKey) {
                    const {data} = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                        uniqueKey: uniKey,
                    })
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

    useEffect(() => {
        uniKeyRef.current.style.height = 'auto';
        uniKeyRef.current.style.height = uniKeyRef.current.scrollHeight + 4 + 'px';
    }, [uniKey]);

    return {
        uniKey,
        uniKeyError,
        uniKeyRef,
        modal,
        setModal,
        isLoading,
        onChangeUniqueKey,
        onUniqueKeySubmit,
    }
}

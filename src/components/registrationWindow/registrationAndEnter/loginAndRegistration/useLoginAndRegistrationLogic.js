import { useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setWindowChatOpen} from '../../../../store/actions/uiActions';

export default function useLoginAndRegistrationLogic() {
    const [uniKey, setUniKey] = useState('');
    const [uniKeyError, setUniKeyError] = useState('');
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const uniKeyRef = useRef();
    const dispatch = useDispatch();

    // Validation Uniquekey
    function uniKeyValidate(value) {
        setUniKeyError('');
        if (!value) {
            setUniKeyError('registration.error-message');
        }
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

    // Submit UniqueKey
    async function onUniqueKeySubmit(e) {
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
                    dispatch(setWindowChatOpen());
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
        uniKeyRef.current.style.height = uniKeyRef.current.scrollHeight + 5 + 'px';
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

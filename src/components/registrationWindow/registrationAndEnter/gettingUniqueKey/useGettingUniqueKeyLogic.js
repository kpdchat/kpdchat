import {useContext, useState} from 'react';
import axios from 'axios';
import {Context} from '../../../../context/Context';

export default function useGettingUniqueKeyLogic({uniKey}) {
    const [copyActive, setCopyActive] = useState(false);
    const [copyActiveMessage, setCopyActiveMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const {setIsActive} = useContext(Context);

    // Copy Unique Key
    const handleCopyChange = (e) => {
        e.preventDefault();
        setCopyActive(true);

        // Copy to clipboard
        navigator.clipboard.writeText(uniKey)
            .then(() => {
                setCopyActiveMessage('registration.copy-message');
            })
            .catch((error) => {
                console.error('Помилка при копіюванні ключа:', error);
            });
    }

    // Enter to Chat
    const handleEnterChange = async (e) => {
        e.preventDefault();
        if (copyActiveMessage === '') return;
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                uniqueKey: uniKey,
            });
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
            setIsActive(true);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        copyActive,
        copyActiveMessage,
        isLoading,
        handleCopyChange,
        handleEnterChange,
    }
}

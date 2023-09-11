import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setWindowChatOpen} from '../../../../store/actions/uiActions';

export default function useGettingUniqueKeyLogic({uniKey}) {
    const [copyActive, setCopyActive] = useState(false);
    const [copyActiveMessage, setCopyActiveMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    // Copy Unique Key
    function handleCopyChange (e) {
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
    async function handleEnterChange(e) {
        e.preventDefault();
        if (copyActiveMessage === '') return;
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                uniqueKey: uniKey
            });
            localStorage.setItem('user', JSON.stringify(data));
            dispatch(setWindowChatOpen());
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
        handleEnterChange
    }
}

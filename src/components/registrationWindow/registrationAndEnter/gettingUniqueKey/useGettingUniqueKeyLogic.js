import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoaderHide, setLoaderShow, setWindowChatOpen} from '../../../../store/actions/uiActions';
import {useTranslation} from 'react-i18next';

export default function useGettingUniqueKeyLogic({uniKey}) {
    const [copyActive, setCopyActive] = useState(false);
    const [copyActiveMessage, setCopyActiveMessage] = useState('');
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

    // User Language
    const {i18n} = useTranslation();
    const languageList = {
        'ua': 0,
        'en': 1
    };
    const userLanguage = languageList[i18n.language];

    // Enter to Chat
    async function handleEnterChange(e) {
        e.preventDefault();
        if (copyActiveMessage === '') return;
        try {
            dispatch(setLoaderShow());
            const {data} = await axios.post('https://kpdchat.onrender.com/api/users/login', {
                uniqueKey: uniKey
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
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoaderHide());
        }
    }

    return {
        copyActive,
        copyActiveMessage,
        handleCopyChange,
        handleEnterChange
    }
}

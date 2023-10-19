import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {fetchUserGettingKey} from '../../../../store/actions/userActions';

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
        dispatch(fetchUserGettingKey(uniKey, userLanguage));
    }

    return {
        copyActive,
        copyActiveMessage,
        handleCopyChange,
        handleEnterChange
    }
}

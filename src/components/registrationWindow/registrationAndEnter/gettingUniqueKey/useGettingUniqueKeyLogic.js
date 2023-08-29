import {useState} from 'react';

export default function useGettingUniqueKeyLogic({uniKey}) {
    const [copyActive, setCopyActive] = useState(false)

    const handleCopyChange = (event) => {
        event.preventDefault();
        setCopyActive(true)

        // Copy to clipboard
        navigator.clipboard.writeText(uniKey)
            .then(() => {
                console.log('Текст скопирован:', uniKey); // Добавить попап что ключ скопирован в буфер обмена
            })
            .catch((error) => {
                console.error('Ошибка при копировании:', error); // Возникла ошибка при копировании
            });
    }

    const handleEnterChange = (event) => {
        event.preventDefault();
    }

    return {
        copyActive,
        handleCopyChange,
        handleEnterChange,
    }
}

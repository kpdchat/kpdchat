import React from 'react';
import {useTranslation} from 'react-i18next';

export default function AddFolderCounter({selected}) {
    const {t} = useTranslation();

    const getChatForm = (number) => {
        if (number % 10 === 1 && number % 100 !== 11) {
            return t('addFolder.chat');
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            return t('addFolder.chats1');
        } else {
            return t('addFolder.chats2');
        }
    };

    const chatForm = getChatForm(selected)

    return (
        <>
            { selected } { chatForm }
        </>
    );
}

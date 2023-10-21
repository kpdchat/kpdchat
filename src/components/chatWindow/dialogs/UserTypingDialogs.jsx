import React from 'react';
import { useTranslation } from 'react-i18next';

export default function UserTypingDialogs({nicknames}) {
    const { t } = useTranslation();

    function nicknameText() {
        if (nicknames) {
            if (nicknames.length > 1) {
                return `${ nicknames.length } ${ t('chat-context-menu.userTypings') }`;
            } else {
                return `${ nicknames } ${ t('chat-context-menu.userTyping') }`;
            }
        }
    }

    const nickname = nicknameText();

    return (
        <>
            { nickname }
        </>
    );
}

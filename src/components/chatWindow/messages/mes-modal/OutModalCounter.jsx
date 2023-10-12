import React from 'react';
import {useTranslation} from 'react-i18next';

export default function OutModalCounter({outChatMembers}) {
    const {t} = useTranslation();

    const getMembersForm = (number) => {
        if (number % 10 === 1 && number % 100 !== 11) {
            return t('chat-context-menu.cryMember');
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            return t('chat-context-menu.cryMembers1');
        } else {
            return t('chat-context-menu.cryMembers2');
        }
    };

    const membersForm = getMembersForm(outChatMembers)

    return (
        <p className='text-inter-14-400'>
            { outChatMembers } { membersForm }
        </p>
    );
}

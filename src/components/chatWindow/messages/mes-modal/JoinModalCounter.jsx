import React from 'react';
import {useTranslation} from 'react-i18next';

export default function JoinModalCounter({members}) {
    const {t} = useTranslation();

    const getMembersForm = (number) => {
        if (number % 10 === 1 && number % 100 !== 11) {
            return t('chat-context-menu.memberCount');
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            return t('chat-context-menu.membersCount1');
        } else {
            return t('chat-context-menu.membersCount2');
        }
    };

    const membersForm = getMembersForm(members)

    return (
        <p className='text-inter-14-400'>
            { members } { membersForm }
        </p>
    );
}

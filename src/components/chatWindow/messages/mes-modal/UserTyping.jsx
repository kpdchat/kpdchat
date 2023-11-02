import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDataForMessages } from '../../../../store/selectors';
import UserTypingDotsUI from '../../../../extra/UserTypingDotsUI';

export default function UserTyping() {
    const { user, chat } = useSelector(selectDataForMessages);
    const { t } = useTranslation();
    const nicknames = chat?.userTypingDtos?.filter(el => el.userProfile.id !== user.id).map((el) => el.userProfile.nickname);
    let displayText = '';

    if (nicknames) {
        const firstThreeNicknames = nicknames.slice(0, 3).join(', ');

        if (nicknames.length <= 3) {
            displayText = nicknames.join(', ');
        } else {
            displayText = `${ firstThreeNicknames } ${ t('chat-context-menu.others') } `;
        }
    }

    function getNicknameCount(number) {
        if (number === 1) {
            return t('chat-context-menu.typing');
        } else if (number >= 2) {
            return t('chat-context-menu.typings');
        }
    }

    const nicknameCount = getNicknameCount(nicknames.length);

    return (
        <div className='user-typing'>
            <p className='text-inter-14-400'>
                { displayText } { nicknameCount }
            </p>

            <UserTypingDotsUI />
        </div>
    );
}

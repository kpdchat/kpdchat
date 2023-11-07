import { useTranslation } from 'react-i18next';

export function useShowRepliedMessages(message, user) {
    const { t } = useTranslation();
    const text = getText();
    const nickname = getNickname()
    function getText() {
        const unShown = isShown()
        if (unShown) {
            return t("global.deleted-message")
        }
        if (message?.repliedToMessage?.text?.length > 30) {
            return message?.repliedToMessage?.text.slice(0, 30) + '...';
        }
        return message?.repliedToMessage?.text;
    }

    function getNickname() {
        const unShown = isShown()
        if (unShown) {
            return ''
        }
        return message?.repliedToMessage?.userProfile?.nickname;
    }

    function isShown() {
        return message?.repliedToMessage?.isHidden
            || (message?.repliedToMessage?.isDeleted && message?.repliedToMessage?.userProfile.id === user.id)
    }
    return { text, nickname, t }
}
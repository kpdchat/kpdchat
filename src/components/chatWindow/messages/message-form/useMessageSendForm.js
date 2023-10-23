import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchPostMessage, fetchUpdateMessage, clearForm } from '../../../../store/actions/messageAction';

export default function useMessageSendForm(setError) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    function textValidation(text) {
        if (!text || !text.trim()) {
            setError('Не можна надсилати пусте повідомлення')
            return
        }

        if (text.length > 4000) {
            setError(`Максимум 4000 символів, у Вас ${text.length}`)
            return
        }
        setError('')
    }

    function updateMessage(editMessage, user, text) {
        const editData = {
            "messageId": editMessage.id,
            "userId": user.id,
            "text": text
        }
        dispatch(fetchUpdateMessage(editData));
    }

    function postLongMessage(text, data) {
        const firstMesData = {
            ...data,
            'text': text.slice(0, 1999),
        }

        dispatch(fetchPostMessage(firstMesData));


        setTimeout(() => {
            const secondMesData = {
                ...data,
                'text': text.slice(1999,),
                'sentAt': Math.round(Date.now() / 1000),
            }
            dispatch(fetchPostMessage(secondMesData));
        }, 1000)
    }
    function replyToMessage(data, replyMessage) {
        const replyData = {
            ...data,
            "repliedToMessageId": replyMessage.id
        }
        dispatch(fetchPostMessage(replyData));
        dispatch(clearForm());
    }

    return {
        textValidation,
        updateMessage,
        postLongMessage,
        replyToMessage,
        t,
    }
}
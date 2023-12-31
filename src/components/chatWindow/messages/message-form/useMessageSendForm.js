import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchPostMessage, fetchUpdateMessage, clearForm, setUnSeenCount } from '../../../../store/actions/messageAction';

export default function useMessageSendForm(setError) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    function textValidation(text) {
        if (!text || !text.trim()) {
            setError(true)
            return
        }

        if (text.length > 4000) {
            setError(true)
            return
        }
        setError(false)
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
            dispatch(setUnSeenCount(0))
        }, 1000)
    }
    
    function replyToMessage(data, replyMessage) {
        const replyData = {
            ...data,
            "repliedToMessageId": replyMessage.id
        }
        dispatch(setUnSeenCount(0))
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
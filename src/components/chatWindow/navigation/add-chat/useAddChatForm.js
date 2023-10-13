import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { validateImageOnServer } from "../../../../extra/config/functions/validateImageOnServer";

export default function useAddChatForm(chatPictureLink) {
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    function onTextareaInput(e) {
        if (e.target.value.length >= 55) {
            chatPictureLink.current.style.height = chatPictureLink.current.scrollHeight + 3 + "px"
        } else {
            chatPictureLink.current.style.height = '27px'
        }
    }

    async function validateImageServer(url) {
        setLoading(true)

        if (await validateImageOnServer(url)) {
            setLoading(false)
            setLink(url)
        } else {
            setLink('')
            setLoading(false)
            return t('addChat.wrongUrl')
        }
    }

    return {
        link,
        loading,
        t,
        onTextareaInput,
        validateImageServer,
    }
}
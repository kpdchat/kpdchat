import { useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';

export default function useAddChatForm(chatPictureLink) {
    const [choseImg, setChoseImg] = useState(false)
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    function onTextareaInput(e) {
        if (e.target.value.length >= 55) {
            chatPictureLink.current.style.height = chatPictureLink.current.scrollHeight + 3 + "px"
        } else {
            chatPictureLink.current.style.height = '40px'
        }
    }

    async function validateImageOnServer(url) {
        setLoading(true)
        try {
            const response = await axios.head(url, {
                timeout: 10000,
            });
            setLoading(false)
            return response.status !== 200 || !response.headers['content-type'].includes('image') ?
                "Посилання не активне.Перевірте ще раз." : true && setLink(url);

        } catch (error) {
            setLink('')
            setLoading(false)
            return "Посилання не активне. Перевірте ще раз.";
        }

    }

    return {
        choseImg,
        link,
        loading,
        t,
        onTextareaInput,
        validateImageOnServer,
        setChoseImg
    }
}
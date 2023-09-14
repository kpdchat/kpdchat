import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form"
import { useTranslation } from 'react-i18next';
import { MdOutlineClose, MdOutlineAddPhotoAlternate, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { DotSpinner } from '@uiball/loaders'



export default function AddChatModal() {
    const [choseImg, setChoseImg] = useState(false)
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)

    const chatPictureLink = useRef()
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({ mode: "onChange" })
    const { ref, ...rest } = register('chatPictureLink', {
        onChange: onTextareaInput,
        required: 'required',
        maxLength: {
            value: 2000,
            message: t('addFolder.maxLength')
        },
        validate: {
            checkUrl: validateImageOnServer
        }
    });

    console.log(link, 'link');
    



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

    function onImgClick() {
        const values = getValues()
        if (!errors?.title && values.title) {
            setChoseImg(true)
        }
    }


    function onFormSubmit(data) {
        console.log('click');
        console.log(data);
    }
    return (
        <div className="modal-container chat-modal">
            <div className="chat-modal__content">
                <div className="chat-modal__header">
                    <h3 className="text-inter-18-600">Створити чат</h3>
                    <MdOutlineClose className="cursor-pointer"
                        size={24}
                    // onClick={() => {
                    //     dispatch(setModalClose())
                    //     dispatch(clearEditFolder())
                    // }}
                    />
                </div>
                <form className="chat-modal__form">
                    <div className="chat-modal__form-container" >
                        <div className="chat-modal__img cursor-pointer" onClick={onImgClick}>
                        {link && <img src={link} alt="default-picture" />} 
                        
                        
                           <MdOutlineAddPhotoAlternate size={24} className= {link ? 'display-none' : null}/>
                        </div>
                        <div>
                            <input
                                {...register("title", {
                                    required: 'required',
                                    maxLength: {
                                        value: 40,
                                        message: t('addFolder.maxLength')
                                    },
                                    minLength: {
                                        value: 4,
                                        message: t('addFolder.minLength')
                                    }
                                })}
                                placeholder='Назва чату '
                                className={choseImg ? 'display-none' : "chat-modal__title text-inter-16-400"}
                            />
                            <div className="chat-modal__error">
                                {errors?.title && <p className="text-inter-14-400">{errors?.title?.message || "Error"}</p>}
                            </div>

                            <textarea {...rest}
                                name="chatPictureLink" ref={(e) => {
                                    ref(e)
                                    chatPictureLink.current = e
                                }}
                                placeholder='Посилання на зображення'
                                rows="1"
                                className={choseImg ? "chat-modal__textarea scroll-bar text-inter-16-400" : 'display-none'}
                            />
                            <div className="chat-modal__error chat-modal__error_textarea">
                                {errors?.chatPictureLink && <p className={choseImg ? "text-inter-14-400" : 'display-none'}>{errors?.chatPictureLink?.message || "Error"}</p>}
                            </div>
                        </div>
                        <div className= {loading ? "loading" : "display-none"} >
                            <DotSpinner
                                size={30}
                                speed={0.9}
                                color="#38328A"
                            />
                        </div>


                    </div>



                    

                    {/* <div className="chat-modal__arrows">
                        <MdKeyboardArrowLeft size={24}/>
                        <MdKeyboardArrowRight size={24}/>
                    </div> */}

                    <button className="text-inter-18-600 cursor-pointer" onClick={handleSubmit(onFormSubmit)}>Створити</button>
                </form>
            </div>
        </div>
    )
}
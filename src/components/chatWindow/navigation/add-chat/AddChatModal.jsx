import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form"
import { useTranslation } from 'react-i18next';
import { MdOutlineClose, MdOutlineAddPhotoAlternate } from "react-icons/md";



// useEffect(() => {
//     textareaRef.current.style.height = 'auto';
//     console.log(textareaRef.current.style.height);
//     textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + 'px';
// }, [textareaRef]);
// function onTextareaInput(e) {
//     // textareaRef.current.style.height = textareaRef.current.scrollHeight
// console.log(textareaRef.current.style);

//     textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + "px"
// }


export default function AddChatModal() {
    const [choseImg, setChoseImg] = useState(false)
    const { t } = useTranslation()
    const textareaRef = useRef()

    // useEffect(() => {
    //     console.log(textareaRef?.current);
    // }, [textareaRef]);
    function onTextareaInput(e) {
        if (e.target.value.length >= 55) {
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 3 + "px"
        } else {
            textareaRef.current.style.height = '40px'
        }
        // textareaRef.current.style.height = textareaRef.current.scrollHeight
        // console.log(textareaRef.current.style);

        //     textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + "px"
        console.log(textareaRef?.current);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({ mode: "all" })

    function onFormSubmit(data) {
        console.log();
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
                        <div className="chat-modal__img cursor-pointer" onClick={() => setChoseImg(true)}>
                            <MdOutlineAddPhotoAlternate size={24} />
                        </div>
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
                        <textarea
                            {...register("chatPictureLink", {
                                maxLength: {
                                    value: 2000,
                                    message: t('addFolder.maxLength')
                                },
                            })}
                            placeholder='Посилання на зображення'
                            rows="1"
                            onInput={onTextareaInput}
                            className={choseImg ? "chat-modal__textarea scroll-bar text-inter-16-400" : 'display-none'}
                            ref={textareaRef}
                        />
                    </div>
                    {/* <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="default-picture" /> */}

                    <button className="text-inter-18-600 cursor-pointer" onClick={handleSubmit(onFormSubmit)}>Створити</button>
                </form>

            </div>
        </div>
    )
}
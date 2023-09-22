import React, { useRef } from "react";
import { useForm } from "react-hook-form"
import { MdOutlineClose, MdOutlineHideImage } from "react-icons/md";
import { DotSpinner } from '@uiball/loaders'
import { useDispatch, useSelector } from 'react-redux';
import useAddChatForm from "./useAddChatForm";
import { setModalClose } from "../../../../store/actions/uiActions";
import { selectUser } from "../../../../store/selectors";
import { fetchCreateChat } from "../../../../store/actions/chatActions";



export default function AddChatModal() {
    const chatPictureLink = useRef()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({ mode: "onChange" })

    const {
        link,
        loading,
        t,
        onTextareaInput,
        validateImageOnServer,
    } = useAddChatForm(chatPictureLink)

    const { ref, ...rest } = register('chatPictureLink', {
        onChange: onTextareaInput,
        required: t('addChat.error'),
        maxLength: {
            value: 2000,
            message: t('addChat.linkMax')
        },
        validate: {
            checkUrl: validateImageOnServer
        }
    });


    function onFormSubmit(data) {
        const chat = {
            userId: user.id,
            ...data
        }
        dispatch(fetchCreateChat(chat))
        dispatch(setModalClose())
    }
    return (
        <div className="modal-container chat-modal">
            <div className="chat-modal__content">
                <div className="chat-modal__header">
                    <h3 className="text-inter-18-600">{t('addChat.createChat')}</h3>
                    <MdOutlineClose className="cursor-pointer"
                        size={24}
                        onClick={() => {
                            dispatch(setModalClose())
                        }}
                    />
                </div>

                <form className="chat-modal__form">
                    <div className="chat-modal__form-container" >
                        <div className="chat-modal__img">
                            {link && <img src={link} alt="default-picture" />}
                            <MdOutlineHideImage size={24} className={link ? 'display-none' : null} />

                        </div>
                        <div>
                            <input
                                {...register("title", {
                                    required: t('addChat.error'),
                                    maxLength: {
                                        value: 40,
                                        message: t('addChat.maxLength')
                                    },
                                    minLength: {
                                        value: 4,
                                        message: t('addChat.minLength')
                                    }
                                })}
                                placeholder={t('addChat.chatName')}
                                className="chat-modal__title text-inter-16-400"
                            />
                            <div className="chat-modal__error">
                                {errors?.title && <p className="text-inter-14-400">{errors?.title?.message || "Error"}</p>}
                            </div>

                            <textarea {...rest}
                                name="chatPictureLink" ref={(e) => {
                                    ref(e)
                                    chatPictureLink.current = e
                                }}
                                placeholder={t('addChat.addPictureLink')}
                                rows="1"
                                className="chat-modal__textarea scroll-bar text-inter-16-400"
                            />
                            <div className="chat-modal__error chat-modal__error_textarea">
                                {errors?.chatPictureLink && <p className="text-inter-14-400">{errors?.chatPictureLink?.message || "Error"}</p>}
                            </div>
                        </div>
                        <div className={loading ? "loading" : "display-none"} >
                            <DotSpinner
                                size={30}
                                speed={0.9}
                                color="#38328A"
                            />
                        </div>
                    </div>
                    <button className="text-inter-18-600 cursor-pointer" onClick={handleSubmit(onFormSubmit)}>{t('addChat.create')}</button>
                </form>
            </div>
        </div>
    )
}
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"; //useMemo
// import chat_logo from '../../../../images/chat-window/chat-logo-full.png'
import { icons } from "../../../../extra/config/folder-icons";
import { fetchCreateFolder, fetchUpdateFolder } from "../../../../store/actions/userActions";
import { selectUser } from "../../../../store/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { selectEditFolder } from "../../../../store/selectors";
import { setModalClose } from "../../../../store/actions/uiActions";

//for render chats

// const chats = [
//     {
//         id: 1,
//         title: "Настолки у Харкові"
//     },
//     {
//         id: 2,
//         title: "Знайомства 20+"
//     },
//     {
//         id: 3,
//         title: "New game"
//     },
//     {
//         id: 4,
//         title: "Мистецтво_modern Ukraine"
//     },
//     {
//         id: 5,
//         title: "Новини Луцьк"
//     },
//     {
//         id: 6,
//         title: "Маркетинг_сьогодні"
//     },
//     {
//         id: 7,
//         title: "Good Job"
//     },
//     {
//         id: 8,
//         title: "Fresh огляд Tony"
//     },
//     {
//         id: 9,
//         title: "OLD School | Rock"
//     },

// ]



export default function AddFolderModal() {
    const [iconName, setIconName] = useState(icons.default)
    const [iconChose, setIconChose] = useState(false)
    const [chatCount, setChatCount] = useState(0)
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const editFolder = useSelector(selectEditFolder)
    const user = useSelector(selectUser)

    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
    } = useForm({ defaultValues: editFolder.id ? editFolder : { "iconTag": "default" }, mode: "onSubmit" })

    //search-logic

    // const filteredChats = useMemo(() => {
    //     return chats.filter(chat => {
    //         return chat.title.toLowerCase().includes(query.toLowerCase())
    //     })
    // }, [query])

    function onFormSubmit(data) {
        if (!data.publicChatIds) {
            data.publicChatIds = []
        }
        const folder = {
            ...editFolder,
            userId: user.id,
            ...data
        }
        if(folder.id) {
            const updateFolder = {
                ...editFolder,
                ...data
            }
            dispatch(fetchUpdateFolder(updateFolder))
        } else {
            dispatch(fetchCreateFolder(folder))
        }
        
        dispatch(setModalClose())
        reset()
    }

    useEffect(() => {
        if (editFolder?.id) {
            setIconName(icons[editFolder.iconTag])
            console.log('useEffect')
        }
    }, [editFolder?.id, editFolder.iconTag])

    function onUlClick(e) {
        e.stopPropagation()
        setTimeout(() => {
            const values = getValues("publicChatIds")
            !values.length ? setChatCount(0) : setChatCount(values.length)
        }, 50)
    }

    return (
        <div className="modal-container folder-modal">
            <div className="folder-modal__content">
                <div className="folder-modal__header">
                    <h3 className="text-inter-18-600">{t('addFolder.createFolder')}</h3>
                    <MdOutlineClose className="cursor-pointer"
                        size={24}
                        onClick={() => dispatch(setModalClose())}
                    />
                </div>
                <div className="folder-modal__form form">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="form__name-container">
                            <div
                                className="form__icon-chose cursor-pointer"
                                onClick={() => setIconChose(true)}>
                                {iconName}
                            </div>
                            <input
                                {...register("title", {
                                    required: t('addFolder.error'),
                                    pattern: {
                                        value: /^[^\s][а-яА-Яa-zA-Z0-9]*[\s]{0,1}[а-яА-Яa-zA-Z0-9]*$/,
                                        message: t('addFolder.pattern')
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: t('addFolder.maxLength')
                                    },
                                    minLength: {
                                        value: 4,
                                        message: t('addFolder.minLength')
                                    }
                                })}
                                placeholder={t('addFolder.folderName')}
                                className="form__folder-name text-inter-16-400"
                            />

                            <div className={iconChose ? "form__icon" : "display-none"}>
                                {Object.keys(icons).map(el => <label className="icon cursor-pointer"
                                    key={el}
                                    onClick={() => {
                                        setIconChose(false)
                                        setIconName(icons[el])
                                    }}>
                                    {icons[el]}
                                    <input {...register("iconTag")} type="radio"
                                        value={el}
                                        className="display-none" />
                                </label>)}
                            </div>

                        </div>
                        <div className="form__error">
                            {errors?.title && <p className="text-inter-14-400">{errors?.title?.message || "Error"}</p>}
                        </div>
                        <input
                            className="form__search-chat text-inter-16-400"
                            placeholder={t('addFolder.chatName')}
                            value={query}
                            onChange={e => setQuery(e.target.value)} />
                        <div className="form__chat-container scroll-bar">

                            <ul onClick={onUlClick}>
                                {/* logic for render chats */}
                                {/* {filteredChats.map(chat =>
                                    <li className="form__chat"
                                        key={chat.id} >
                                        <label className="cursor-pointer">
                                            <div className="flex-container">
                                                <img src={chat_logo} alt="" />
                                                <h3 className="text-inter-18-600">{chat.title}</h3>
                                            </div>

                                            <input
                                                {...register("publicChatIds")}
                                                value={chat.id}
                                                type="checkbox" />
                                        </label>
                                    </li>)} */}
                            </ul>

                        </div>

                        <div className="form__chat-count text-inter-16-500">
                            {t('addFolder.selected')} {chatCount}
                        </div>

                        <input
                            type="submit"
                            className="text-inter-16-600 cursor-pointer"
                            value={t('addFolder.create')} />
                    </form>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form"
import { useState, useEffect, useMemo } from "react";
import chat_logo from '../../../../images/chat-window/chat-logo-full.png'
import { icons } from "../../../../extra/config/folder-icons";
import { addFolder } from "../../../../store/actions/foldersActions";
import { useDispatch, useSelector } from 'react-redux';
import { selectEditFolder } from "../../../../store/selectors";


const chats = [
    {
        id: 1,
        title: "Настолки у Харкові"
    },
    {
        id: 2,
        title: "Знайомства 20+"
    },
    {
        id: 3,
        title: "New game"
    },
    {
        id: 4,
        title: "Мистецтво_modern Ukraine"
    },
    {
        id: 5,
        title: "Новини Луцьк"
    },
    {
        id: 6,
        title: "Маркетинг_сьогодні"
    },
    {
        id: 7,
        title: "Good Job"
    },
    {
        id: 8,
        title: "Fresh огляд Tony"
    },
    {
        id: 9,
        title: "OLD School | Rock"
    },

]


export default function AddFolderModal({setIsModal}) {
    const [iconName, setIconName] = useState(icons.default)
    const [iconChose, setIconChose] = useState(false)
    const [chatCount, setChatCount] = useState(0)
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const editFolder = useSelector(selectEditFolder)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
    } = useForm({ defaultValues: editFolder.id ? editFolder : { "iconTag": "default" }, mode: "all" })
    
    const filteredChats = useMemo(() => {
        return chats.filter(chat => {
            return chat.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [chats, query])

    function onFormSubmit(data) {
        console.log(data);
        dispatch(addFolder(data))
        setIsModal(prev => !prev)
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
                    <h3 className="text-inter-18-600">Створити папку</h3>
                    <MdOutlineClose className="cursor-pointer" size={24} onClick={() =>setIsModal(prev => !prev)}/>
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
                                    required: "Поле обов'язкове для заповнення",
                                    pattern: {
                                        value: /^[а-яА-Яa-zA-Z0-9]{4,12}$/,
                                        message: "Назва папки має містити мінімум 4 символи"
                                    }
                                })}
                                placeholder="Назва папки"
                                className="form__folder-name text-inter-16-400"
                            />

                            <div className={iconChose ? "form__icon" : "display-none"}>
                                {Object.keys(icons).map(el => <label className="icon cursor-pointer"
                                    key={el}
                                    onClick={() => {
                                        setIconChose(false)
                                        setIconName(icons[el])
                                        console.log(el);
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
                            placeholder="Назва чату або нікнейм"
                            value={query}
                            onChange={e => setQuery(e.target.value)} />
                        <div className="form__chat-container scroll-bar">

                            <ul onClick={onUlClick}>
                                {filteredChats.map(chat =>
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
                                    </li>)}
                            </ul>

                        </div>

                        <div className="form__chat-count text-inter-16-500">
                            Вибрано {chatCount}
                        </div>

                        <input
                            type="submit"
                            className="text-inter-16-600 cursor-pointer"
                            value="Створити" />
                    </form>
                </div>
            </div>
        </div>
    )
}

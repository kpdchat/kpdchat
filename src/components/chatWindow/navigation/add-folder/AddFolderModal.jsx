import React, { useState, useEffect, useMemo } from "react"; 
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { icons } from "../../../../extra/config/folder-icons";
import { clearEditFolder, fetchCreateFolder, fetchUpdateFolder } from "../../../../store/actions/userActions";
import { selectUser, selectEditFolderForForm } from "../../../../store/selectors";
import { setModalClose } from "../../../../store/actions/uiActions";

export default function AddFolderModal() {
    const [iconName, setIconName] = useState(icons.default)
    const [iconChose, setIconChose] = useState(false)
    const [chatCount, setChatCount] = useState(0)
    const [query, setQuery] = useState("")

    const dispatch = useDispatch()
    const editFolder = useSelector(selectEditFolderForForm)
    const user = useSelector(selectUser)
    const chats = user.chats
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({ defaultValues: editFolder.id ? editFolder : { "iconTag": "default" }, mode: "onSubmit" })

    //setting icon
    useEffect(() => {
        if (editFolder?.id) {
            setIconName(icons[editFolder.iconTag])
            setChatCount(editFolder.publicChatIds.length)
        }

    }, [editFolder?.id, editFolder?.iconTag, editFolder?.publicChatIds?.length])

    //function for display how many chats were chosen 
    function onUlClick(e) {
        e.stopPropagation()
        setTimeout(() => {
            const values = getValues("publicChatIds")
            !values.length ? setChatCount(0) : setChatCount(values.length)
        }, 50)
    }

    //search-logic
    const filteredChats = useMemo(() => {
        return chats.filter(chat => {
            return chat.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [query, chats])

    function onFormSubmit(data) {
        if (!data.publicChatIds) {
            data.publicChatIds = []
        }
        console.log(editFolder)
        console.log(data);
        if (editFolder.id) {
            // const updateFolder = {
            //     ...editFolder,
            //     ...data,
            //     "publicChatIds": data.publicChatIds,

            // }
            console.log(data, 'updateFolder');
            dispatch(fetchUpdateFolder(data))
        } else {
            const folder = {
                userId: user.id,
                ...data
            }
            dispatch(fetchCreateFolder(folder))
        }
        dispatch(clearEditFolder())
        dispatch(setModalClose())
    }

    return (
        <div className="modal-container folder-modal">
            <div className="folder-modal__content">
                <div className="folder-modal__header">
                    <h3 className="text-inter-18-600">{editFolder.id ? t('addFolder.editFolder') : t('addFolder.createFolder')}</h3>
                    <MdOutlineClose className="cursor-pointer"
                        size={24}
                        onClick={() => {
                            dispatch(setModalClose())
                            dispatch(clearEditFolder())
                        }}
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
                                        value: /^[^\s][а-яА-Яієa-zA-Z0-9]*[\s]{0,1}[а-яА-Яієa-zA-Z0-9]*$/,
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
                                {filteredChats.map(chat =>
                                    <li className="form__chat"
                                        key={chat.id} >
                                        <label className="cursor-pointer">
                                            <div className="flex-container">
                                                <img src={chat.chatPictureLink} alt="" />
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

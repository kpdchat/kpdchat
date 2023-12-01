import React, { useState, useEffect, useMemo } from "react";
import { MdOutlineClose } from "react-icons/md";
import { DotSpinner } from '@uiball/loaders';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { icons } from "../../../../extra/config/vocabulary/folder-icons";
import { clearEditFolder, fetchCreateFolder, fetchUpdateFolder } from "../../../../store/actions/folderActions";
import { selectUser, selectEditFolderForForm, selectUi } from "../../../../store/selectors";
import { setLoaderHide, setLoaderShow, setModalClose } from "../../../../store/actions/uiActions";
import AddFolderCounter from './AddFolderCounter';

export default function AddFolderModal() {
    const [iconName, setIconName] = useState(icons.default);
    const [iconChose, setIconChose] = useState(false);
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();
    const { isActiveLoader } = useSelector(selectUi);
    const editFolder = useSelector(selectEditFolderForForm);
    const user = useSelector(selectUser);
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({ defaultValues: editFolder.id ? editFolder : { "iconTag": "default" }, mode: "onSubmit" });

    const checked = watch("chatIds");

    let selected = getSelected();

    function getSelected() {
        if (typeof checked === 'string') {
            return 1;
        }
        if (!checked) {
            return 0;
        }
        return checked?.length;
    }

    //search-logic
    const filteredChats = useMemo(() => {
        return user.chats.sort(((a, b) => {
            return (a.id - b.id);
        })).filter(chat => {
            return chat.title.toLowerCase().includes(query.toLowerCase());
        })
    }, [query, user.chats])

    //form submit
    function onFormSubmit(data) {
        if (!data.chatIds) {
            data.chatIds = [];
        }

        if (user.chats.length < 2 && data.chatIds) {
            data.chatIds = [Number(data.chatIds)]
        }

        if (editFolder.id) {
            const updateFolder = {
                "id": editFolder.id,
                "title": data.title,
                "iconTag": data.iconTag,
                "chatIds": data.chatIds.map(id => Number(id))
            }
            dispatch(fetchUpdateFolder(updateFolder));
        } else {
            const folder = {
                userId: user.id,
                ...data, 
                "chatIds": data.chatIds.map(id => Number(id))
            }
            dispatch(fetchCreateFolder(folder));
        }

        dispatch(setLoaderShow());
        setTimeout(() => {
            dispatch(setLoaderHide());
            dispatch(setModalClose());
            dispatch(clearEditFolder());
        }, 1500)
    }

    //setting icon
    useEffect(() => {
        if (editFolder?.id) {
            setIconName(icons[editFolder.iconTag]);
        }

    }, [editFolder?.id, editFolder?.iconTag])

    return (
        <div className="modal-container  no-select">
            <div className="modal-container__content">
                <div className="modal-container__header">
                    <h3 className="text-inter-18-600">
                        {editFolder.id ? t('addFolder.editFolderModal') : t('addFolder.createFolder')}
                    </h3>
                    <MdOutlineClose
                        className="close-img cursor-pointer"
                        size={24}
                        onClick={() => {
                            dispatch(setModalClose());
                            dispatch(clearEditFolder());
                        }}
                    />
                </div>
                <div className="modal-container__description folder-modal">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="folder-modal__name-container">
                            <div
                                className="folder-modal__icon-chose cursor-pointer"
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
                                className="folder-modal__folder-name text-inter-16-400"
                            />

                            <div className={iconChose ? "folder-modal__icon" : "display-none"}>
                                {Object.keys(icons).map(el =>
                                    <label
                                        className="icon cursor-pointer"
                                        key={el}
                                        onClick={() => {
                                            setIconChose(false)
                                            setIconName(icons[el])
                                        }}>
                                        {icons[el]}
                                        <input {...register("iconTag")}
                                            type="radio"
                                            value={el}
                                            className="display-none" />
                                    </label>)}
                            </div>
                        </div>

                        <div className="folder-modal__error">
                            {errors?.title && <p className="text-inter-14-400">{errors?.title?.message || "Error"}</p>}
                        </div>

                        <input
                            className="folder-modal__search-chat text-inter-16-400"
                            placeholder={t('addFolder.chatName')}
                            value={query}
                            onChange={e => setQuery(e.target.value)} />

                        <div className="folder-modal__chat-container scroll-bar">
                            <ul>
                                {filteredChats.map(chat =>
                                    <li className="folder-modal__chat"
                                        key={chat.id} >
                                        <label className="cursor-pointer">
                                            <div className="flex-container">
                                                <img src={chat.chatPictureLink} alt="" />
                                                <h3 className="text-inter-18-600">{chat.title}</h3>
                                            </div>

                                            <input
                                                {...register("chatIds")}
                                                value={chat.id}
                                                type="checkbox" />
                                        </label>
                                    </li>)}
                            </ul>
                        </div>

                        <div className="folder-modal__chat-count text-inter-16-500">
                            {t('addFolder.selected')} <AddFolderCounter selected={selected} />
                        </div>

                        <input
                            type="submit"
                            className="text-inter-16-600 cursor-pointer"
                            value={editFolder.id ? t('addFolder.editFolder') : t('addFolder.create')} />
                    </form>
                    <div className={isActiveLoader ? "loading" : "display-none"} >
                        <DotSpinner
                            size={70}
                            speed={0.9}
                            color="#38328A"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

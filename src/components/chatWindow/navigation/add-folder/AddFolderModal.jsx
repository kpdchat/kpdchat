import React from "react";
import { MdBorderAll, MdOutlineLockOpen, MdOutlinePerson3, MdWorkOutline, MdOutlineNewspaper, MdOutlineLocalMall, MdFlipToFront, MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useEffect } from "react";
import chat_logo from '../../../../images/chat-window/chat-logo-full.png'


const icons = {
    default: <MdFlipToFront size={24} />,
    borderAll: <MdBorderAll size={24} />,
    lockOpen: <MdOutlineLockOpen size={24} />,
    person: <MdOutlinePerson3 size={24} />,
    work: <MdWorkOutline size={24} />,
    newspaper: <MdOutlineNewspaper size={24} />,
    shopping: <MdOutlineLocalMall size={24} />,
}



export default function AddFolderModal() {
    const [iconName, setIconName] = useState(icons.default)
    const [iconChose, setIconChose] = useState(false)

    const editFolder = {}
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: editFolder.id ? editFolder : { "IconTag": "default" } })
    function onFormSubmit(data) {
        console.log(data);
        reset()
    }

    useEffect(() => {
        if (editFolder?.id) {
            setIconName(icons[editFolder.IconTag])
            console.log('useEffect');
        }
    }, [editFolder?.id])
    return (
        <div className="modal-container folder-modal">
            <div className="folder-modal__content">
                <div className="folder-modal__header">
                    <h3 className="text-inter-18-600">Створити папку</h3>
                    <MdOutlineClose size={24} />
                </div>
                <div className="folder-modal__form form">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="form__name-container">
                            <div className="form__icon-chose"
                                onClick={() => setIconChose(true)}>
                                {iconName}
                            </div>
                            <input
                                {...register("folderName", { required: true })}
                                placeholder="Назва папки"
                                className="form__folder-name text-inter-16-400"
                            />
                            <div className={iconChose ? "form__icon" : "display-none"}>
                                {Object.keys(icons).map(el => <label className="icon"
                                    key={el}
                                    onClick={() => {
                                        setIconChose(false)
                                        setIconName(icons[el])
                                        console.log(el);
                                    }}>
                                    {icons[el]}
                                    <input {...register("IconTag")} type="radio"
                                        value={el}
                                        className="display-none" />
                                </label>)}
                            </div>
                        </div>
                        <input className="form__search-chat text-inter-16-400" placeholder="Назва чату або нікнейм" />
                        <ul className="form__chat-container scroll-bar">
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()} type="checkbox" />
                                </label>
                            </li>
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()}
                                     type="checkbox" />
                                </label>
                            </li>
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()} type="checkbox" />
                                </label>
                            </li>
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()} type="checkbox" />
                                </label>
                            </li>
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()} type="checkbox" />
                                </label>
                            </li>
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()} type="checkbox" />
                                </label>
                            </li>
                            <li className="form__chat">
                                <label>
                                    <div className="flex-container">
                                        <img src={chat_logo} alt="" />
                                        <h3 className="text-inter-18-600">Настолки в Харкові</h3>
                                    </div>

                                    <input {...register("publicChatIds")}
                                    value={Math.random()} type="checkbox" />
                                </label>
                            </li>
                        </ul>
                        <input type="submit" className="text-inter-16-600" value="Створити" />
                    </form>
                </div>
            </div>
        </div>
    )
}

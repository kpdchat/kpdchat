import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import close_icon from "../../../../images/chat-window/close.png"
import edit_icon from "../../../../images/chat-window/edit_square.png"
import user_photo from '../../../../images/chat-window/user-photo.png'
import language_icon from '../../../../images/chat-window/language.png'

const locales = {
    en: { title: 'EN' },
    ua: { title: 'UA' },
  };

export default function SettingsModal({ isOpen, setOpen }) {
    const [isInput, setIsInput] = useState(false)

    const { t, i18n } = useTranslation()


    function onEditClick(e) {
        e.stopPropagation()
        setIsInput(!isInput)
    }

    function onCloseClick() {
        setOpen(!isOpen)
    }
    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="settings__container modal-container" onClick={onCloseClick}>
            <div className="settings__content" onClick={onContentClick}>
                <div className="modal-title">
                    <h2>Налаштування</h2>
                    <img className="cursor-pointer" src={close_icon} alt="" onClick={onCloseClick}/>
                </div>
                <div className="settings__settings">
                    <div className="settings__user ">
                        <img className="settings__photo" src={user_photo} alt="" />
                        {isInput ? <form action="">
        
                            <input onClick={(e) => {e.stopPropagation()}} type="text" value="Artemiu@s_78" />
                        </form> : <h3 className="title-h3">Artemiu@s_78</h3>}
                        <img className="settings__edit-name cursor-pointer" src={edit_icon} alt="" onClick={onEditClick} />
                    </div>
                    <div className="settings__language">
                        <div className="settings__label">
                            <img src={language_icon} alt="" />
                            <p className="text-14" htmlFor="">Мова </p>
                        </div>
                        <div className="settings__buttons ">
        
                        {Object.keys(locales).map((locale => <button onClick={() => i18n.changeLanguage(locale)} className={i18n.resolvedLanguage === locale ? 'active' : "cursor-pointer"} key ={locale}>{locales[locale].title}</button>))}
                        </div>

                    </div>
                    <button className="settings__submit cursor-pointer" type="submit" onClick={onCloseClick}>Зберегти</button>
                </div>
            </div>
        </div>
    )
}
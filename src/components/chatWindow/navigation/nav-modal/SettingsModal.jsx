import React, { useState } from "react";
import close_icon from "../../../../images/chat-window/close.png"
import edit_icon from "../../../../images/chat-window/edit_square.png"
import user_photo from '../../../../images/chat-window/user-photo.png'
import language_icon from '../../../../images/chat-window/language.png'


export default function SettingsModal({ isOpen, setOpen }) {
    const [isInput, setIsInput] = useState(false)
    const [language, setLanguage] = useState(true)
    
    function onLanguageClick() {
        setLanguage(!language)
    }

    return (
        <div className="settings__container modal-container">
            <div className="settings__content">
                <div className="modal-title">
                    <h2>Налаштування</h2>
                    <img src={close_icon} alt="" onClick={() => setOpen(!isOpen)}/>
                </div>
                <div className="settings__settings">
                    <div className="settings__user ">
                        <img className="settings__photo" src={user_photo} alt="" />
                        {isInput ? <form action="">
                            <input type="text" value="Artemiu@s_78" />
                        </form> : <h3 className="title-h3">Artemiu@s_78</h3>}
                        <img className="settings__edit-name" src={edit_icon} alt="" onClick={() => setIsInput(!isInput)} />
                    </div>
                    <div className="settings__language">
                        <div className="settings__label">
                            <img src={language_icon} alt="" />
                            <p className="text-14" htmlFor="">Мова </p>
                        </div>
                        <div className="settings__buttons">
                            <button onClick={onLanguageClick} className={!language ? 'active' : null}>EN</button>
                            <button className={language ? 'active' : null} onClick={onLanguageClick}>UA</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
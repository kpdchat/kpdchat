import React from "react";
import close_icon from "../../../../images/chat-window/close.png"
import info_icon from "../../../../images/chat-window/info.png"

export default function NavInfoModal({ isOpen, setOpen }) {

    function onCloseClick() {
        setOpen(!isOpen)
    }

    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="settings__info-about modal-container info-about" onClick={onCloseClick} >
            <div className="info-about__content" onClick={onContentClick}>
                <div className="modal-title">
                    <h2>Про KPD Chat</h2>
                    <img className="cursor-pointer" src={close_icon} alt="" onClick={onCloseClick}/>
                </div>
                <div className="info-about__text">
                    <div className="info-about__about">
                        <img src={info_icon} alt="" />
                        <h4 className="text-inter-16-400">
                            Особливості KPD Chat
                        </h4>
                    </div>
                    <p className="text-inter-16-400">
                        KPD Chat - веб додаток де будь-хто може приєднатися до обговорення різних тем, використовуючи лише ім’я користувача(без авторизації). В додатку ви можете спілкуватися більше ніж з двома користувачами, надсилати їм повідомлення, відповідати на їх повідомлення.
                    </p>
                    <br />
                    <p className="text-inter-16-400">Основні функції:</p>

                    <ul className="text-inter-16-400">
                        <li>забезпечує швидший час відповіді та покращує взаємодію користувачів між собою.</li>
                        <li> чат привчає людей проявляти емпатію, надсилання шкидливих і образливих повідомлень не вітається.</li>
                        <li>Кімнати чатів: онлайн-форуми або платформи, де користувачі можуть брати участь у групових дискусіях на певні теми чи спільні інтереси</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

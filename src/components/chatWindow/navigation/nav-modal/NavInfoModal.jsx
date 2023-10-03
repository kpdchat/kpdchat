import React from 'react';
import {useDispatch} from 'react-redux';
import {setModalClose} from '../../../../store/actions/uiActions';
import {MdOutlineClose} from 'react-icons/md';

export default function NavInfoModal() {
    const dispatch = useDispatch();

    function onCloseClick() {
        dispatch(setModalClose());
    }

    return (
        <div className='settings__info-about modal-container info-about'>
            <div className='info-about__content'>
                <div className='info-about__text text'>
                    <div className='text__title'>
                        <h2 className='text-inter-18-600'>
                            Особливості KPD Chat
                        </h2>
                        <MdOutlineClose
                            className='cursor-pointer'
                            size='24'
                            onClick={ onCloseClick }
                        />
                    </div>

                    <div className='text__description'>
                        <p className='text-inter-14-400'>
                            KPD Chat - веб додаток де будь-хто може приєднатися до обговорення різних тем,
                            використовуючи лише ім’я користувача(без авторизації). В додатку ви можете спілкуватися
                            більше ніж з двома користувачами, надсилати їм повідомлення, відповідати на їх повідомлення.
                        </p>

                        <p className='text-inter-14-400 mt-16px'>Основні функції:</p>

                        <ul className='text-inter-14-400'>
                            <li>забезпечує швидший час відповіді та покращує взаємодію користувачів між собою.</li>
                            <li> чат привчає людей проявляти емпатію, надсилання шкидливих і образливих повідомлень не
                                вітається.
                            </li>
                            <li>Кімнати чатів: онлайн-форуми або платформи, де користувачі можуть брати участь у
                                групових дискусіях на певні теми чи спільні інтереси
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

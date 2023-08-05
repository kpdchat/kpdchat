import React from "react";
import user_photo from '../../../images/chat-window/user-photo.png'
import message_photo from '../../../images/chat-window/message-photo.png'

//here u should create 3 components self-message | another-message | data
export default function MessageItem() {
    return (
        <>
            <div className="window-mes__data"> 5 Липня, Середа</div>

            <div className="window-mes__self self">
                <div className="self__title">
                    <h3 className='title-h3'>Evgenia@_87</h3>
                    <img className='chat-img' src={ user_photo } alt="" />
                </div>
                <div className="self__message">
                    <div className="menu-kebab"></div>
                    <div className="self__text">
                        <p className='text-16 '>Привіт всім! Хто буде сьогодні на змаганнях?Я буду с Кет і Сергієм, Нам
                            потрібно ще 2х людей в команду. Welcome</p>
                        <span className='time-mes'>12:28</span>

                    </div>
                </div>
            </div>

            <div className="window-mes__another">
                <div className="another__title">
                    <img className='chat-img' src={ user_photo } alt="" />
                    <h3 className='title-h3'>Evgenia@_87</h3>
                </div>
                <div className="another__message">
                    <div className="another__text">
                        <p className='text-16'>Hello</p>
                        <span className='time-mes'>12:28</span>
                    </div>
                    <div className="menu-kebab"></div>
                </div>
            </div>

            <div className="window-mes__another">
                <div className="another__title">
                    <img className='chat-img' src={ user_photo } alt="" />
                    <h3 className='title-h3'>Evgenia@_87</h3>
                </div>
                <div className="another__message">
                    <div className="another__text">
                        <p className='text-16'>Привіт всім! Хто буде сьогодні на змаганнях?Я буду с Кет і Сергієм, Нам
                            потрібно ще 2х людей в команду. Welcome</p>
                        <span className='time-mes'>12:28</span>
                    </div>
                    <div className="menu-kebab"></div>
                </div>


            </div>
            <div className="window-mes__another">
                <div className="another__title">
                    <img className='chat-img' src={ user_photo } alt="" />
                    <h3 className='title-h3'>Evgenia@_87</h3>
                </div>
                <div className="another__message">
                    <div className="another__text">
                        <img src={ message_photo } alt="" />
                        <span className='time-mes'>12:28</span>
                    </div>
                    <div className="menu-kebab"></div>
                </div>
            </div>
            <div className="window-mes__data"> 5 Липня, Середа</div>

            <div className="window-mes__self self">
                <div className="self__title">
                    <h3 className='title-h3'>Evgenia@_87</h3>
                    <img className='chat-img' src={ user_photo } alt="" />
                </div>
                <div className="self__message">
                    <div className="menu-kebab"></div>
                    <div className="self__text">
                        <p className='text-16 '>Ооо, супер ..Пам’ятаю минулу гру, було дуже гаряче.Я буду з вами
                            напишить де збираємоєсь?</p>
                        <span className='time-mes'>12:28</span>

                    </div>
                </div>
            </div>
        </>

    )
}

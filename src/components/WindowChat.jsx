import React from 'react';
import { ReactComponent as DarkMode } from '../images/chat-window/dark_mode.svg'
import { ReactComponent as Info } from '../images/chat-window/info.svg'
import { ReactComponent as Settings } from '../images/chat-window/settings.svg'
import { ReactComponent as Logo } from '../images/chat-window/logo.svg'
import chat_logo from '../images/chat-window/chat_logo.png'
import user_photo from '../images/chat-window/user-photo.png'
import message_photo from '../images/chat-window/message-photo.png'



export function WindowChat() {
  return (
    <div className='chat'>
      <div className='container-grid'>
        {/* start left side navigation */}
        <section className='chat__navigation navigation'>
          <div className='navigation__folders folders'>
            <div className='folders__title'>
              <h2 className='title'>папки</h2>
            </div>
            <div className='folders__container'>
              <div className='folders__folder '>
                <h4 >всі</h4>
                <h4 >31</h4>
              </div>
              <div className='folders__folder '>
                <h4 >друзі</h4>
                <h4>2</h4>
              </div>
              <div className='folders__folder '>
                <h4 >приватні</h4>
                <h4 >7</h4>
              </div>
              <div className='folders__folder '>
                <h4 >робота</h4>
                <h4 >3</h4>
              </div>
              <div className='folders__folder '>
                <h4 className=''>послуги</h4>
                <h4 >9</h4>
              </div>
              <div className='folders__folder '>
                <h4 >інше</h4>
                <h4 >6</h4>
              </div>
            </div>
          </div>

          <div className='navigation__settings'>
            <Settings />
            <Info />
            <DarkMode />
          </div>
        </section>
        {/* end left side navigation */}
        {/* start center chat column */}
        <section className='chat__dialogs dialogs'>
          <div className='dialogs__logo'>
            <Logo />
            <h1> <span>kpd</span>Chat</h1>
          </div>
          <div className='dialogs__search'>
            <form className='search-form'>
              <input placeholder='Пошук...'></input>
            </form>
          </div>
          <div className='dialogs__list list'>
            <div className="list__container">
              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Настолки у Харкові</h3>
                    <p className='text-14'> ПРИВІТ всім! Хто буде сьогодні на ...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>

              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Знайомства 20 +</h3>
                    <p className='text-14'> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>new games</h3>
                    <p className='text-14'> Rail Time частина ll, вийшла на цьому</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Мистецтво_modern Ukraine</h3>
                    <p className='text-14'>Зелена галерея запрошує усіх ба...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Знайомства 20 +</h3>
                    <p className='text-14'> Шукаю хлопця з мого міста Миколаів...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Новини Луцьк</h3>
                    <p className='text-14'> Погода  буде спектна вже завтра ... </p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>OLD School | Rock</h3>
                    <p className='text-14'> Концерт в Докер-пабі на підтримку ...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>Пн</span>
                  <span className='list__new-count'>9</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Fresh огляд Toni</h3>
                    <p className='text-14'> Огляд смартфона New GAlAXY 23 A ...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Знайомства 20 +</h3>
                    <p className='text-14'> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Знайомства 20 +</h3>
                    <p className='text-14'> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Знайомства 20 +</h3>
                    <p className='text-14'> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img onClick={() => console.log('on img click')} src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3 className='title-h3'>Знайомства 20 +</h3>
                    <p className='text-14'> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <div className="list__data">
                  <span className='list__time'>12:28</span>
                  <span className='list__new-count'>1</span>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* end center chat column */}

        <section className='chat__messages messages'>
          <div className="messages__title">
            <div className="messages__dialog-name">
              <img src={chat_logo} alt="" />
              <div className="messages__dialog-info">
                <h3 className='title-h3'>Настолки у Харкові</h3>
                <p className='text-14'> 245 учасників</p>
              </div>

            </div>
            <div className="messages__search">
              <form className='search-form'>
                <input placeholder='Пошук...'></input>
              </form>
              <div className="messages__info menu-kebab"></div>
            </div>
          </div>
          <div className="messages__window-mes window-mes">
            <div className="window-mes__data"> 5 Липня, Середа</div>

            <div className="window-mes__self self">
              <div className="self__title">
                <h3 className='title-h3'>Evgenia@_87</h3>
                <img className='chat-img' src={user_photo} alt="" />
              </div>
              <div className="self__message"><div className="menu-kebab"></div>
                <div className="self__text">
                  <p className='text-14 '>Привіт всім! Хто буде сьогодні на змаганнях?Я буду с Кет і Сергієм, Нам потрібно ще 2х людей в команду. Welcome</p>
                  <span className='time-mes'>12:28</span>

                </div>
              </div>
            </div>

            <div className="window-mes__another">
              <div className="another__title">
                <img className='chat-img' src={user_photo} alt="" />
                <h3 className='title-h3'>Evgenia@_87</h3>
              </div>
              <div className="another__message">
                <div className="another__text">
                  <p className='text-14'>Hello</p>
                  <span className='time-mes'>12:28</span>
                </div><div className="menu-kebab"></div>
              </div>
            </div>

            <div className="window-mes__another">
              <div className="another__title">
                <img className='chat-img' src={user_photo} alt="" />
                <h3 className='title-h3'>Evgenia@_87</h3>
              </div>
              <div className="another__message">
                <div className="another__text">
                  <p className='text-14'>Привіт всім! Хто буде сьогодні на змаганнях?Я буду с Кет і Сергієм, Нам потрібно ще 2х людей в команду. Welcome</p>
                  <span className='time-mes'>12:28</span>
                </div>
                <div className="menu-kebab"></div>
              </div>
              
              
            </div>
            <div className="window-mes__another">
              <div className="another__title">
                <img className='chat-img' src={user_photo} alt="" />
                <h3 className='title-h3'>Evgenia@_87</h3>
              </div>
              <div className="another__message">
                <div className="another__text">
                  <img src= {message_photo} alt="" />
                  <span className='time-mes'>12:28</span>
                </div>
                <div className="menu-kebab"></div>
              </div>
            </div>
            <div className="window-mes__self self">
              <div className="self__title">
                <h3 className='title-h3'>Evgenia@_87</h3>
                <img className='chat-img' src={user_photo} alt="" />
              </div>
              <div className="self__message"><div className="menu-kebab"></div>
                <div className="self__text">
                  <p className='text-14 '>Ооо, супер ..Пам’ятаю минулу гру, було дуже гаряче.Я буду з вами  напишить  де  збираємоєсь?</p>
                  <span className='time-mes'>12:28</span>

                </div>
              </div>
            </div>
          </div>
          <div className="messages__input-mes input-mes">
            <form action="">
              <input className='text-16' type="text" placeholder='Написати...' />
              <label>
                <input type="file" />
              </label>
              <button type='submit'></button>
            </form>
          </div>
        </section>
      </div>





    </div >
  );
}
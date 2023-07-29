import React from 'react';
import { ReactComponent as AddCircle } from '../images/chat-window/add_circle.svg'
import { ReactComponent as AccountBox } from '../images/chat-window/account_box.svg'
import { ReactComponent as DarkMode } from '../images/chat-window/dark_mode.svg'
import { ReactComponent as Info } from '../images/chat-window/info.svg'
import { ReactComponent as Settings } from '../images/chat-window/settings.svg'
import { ReactComponent as Logo } from '../images/chat-window/logo.svg'
import chat_logo from '../images/chat-window/chat_logo.png'



export function WindowChat() {
  return (
    <div className='chat'>
      <div className='container-grid'>
        {/* start left side navigation */}
        <div className='chat__navigation navigation'>
          <div className='navigation__folders folders'>
            <div className='folders__title'>
              <h2 className='title'>папки</h2>
              <AddCircle />
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
            <AccountBox />
            <Settings />
            <Info />
            <DarkMode />
          </div>
        </div>
        {/* end left side navigation */}
        {/* start center chat column */}
        <div className='chat__dialogs dialogs'>
          <div className='dialogs__logo'>
            <Logo />
            <h1> <span>kpd</span>chat</h1>
          </div>
          <div className='dialogs__search'>
            <form>
              <input placeholder='Пошук...'></input>
            </form>
          </div>
          <div className='dialogs__list list'>
            <div className="list__container">
              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Настолки у Харкові</h3>
                    <p> ПРИВІТ всім! Хто буде сьогодні на ...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>
              
              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Знайомства 20 +</h3>
                    <p> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>new games</h3>
                    <p> Rail Time частина ll, вийшла на цьому</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Мистецтво_modern | Ukraine</h3>
                    <p> Зелена галерея запрошує усіх бажа...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Знайомства 20 +</h3>
                    <p> Шукаю хлопця з мого міста Миколаів...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Новини Луцьк</h3>
                    <p> Погода  буде спектна вже завтра ...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>OLD School | Rock</h3>
                    <p> Концерт в Докер-пабі на підтримку ...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Fresh огляд Toni</h3>
                    <p> Огляд смартфона New GAlAXY 23 A ...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Знайомства 20 +</h3>
                    <p> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Знайомства 20 +</h3>
                    <p> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Знайомства 20 +</h3>
                    <p> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>

              <div className="list__dialog">
                <div className="list__info">
                  <img src={chat_logo} alt="" />
                  <div className="list__text">
                    <h3>Знайомства 20 +</h3>
                    <p> Шукаю хлопця з мого міста...</p>
                  </div>
                </div>
                <span>12:28</span>
              </div>
            </div>

          </div>
        </div>
        {/* end center chat column */}

        <div className='chat__messages'>

        </div>
      </div>
    </div>
  );
}
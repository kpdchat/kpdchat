import React from 'react';
import img from '../../images/RegistrationWindow/puzzles_img.png'
import logo_kpd from '../../images/RegistrationWindow/logo_kpd.png'
import img_add_photo from '../../images/RegistrationWindow/add_photo_img.png'

export function RegistrationWindow() {
  return (
        <div className='registration_window'>

          <div className='info'>

            <div className='info_block'>
              <h1>
                <span>KPD</span>CHAT
              </h1>
              <p>
                Ласкаво просимо у світ швидкого та зручного спілкування!
              </p>
              <p>
                Приєднуйся до нас та розпочни неймовірні розмови просто зараз.
              </p>

              <div className='info_img'>
                <img src ={img} alt = ""/>
              </div>

              <div className='info_feature'>
                <h2>Швидкий</h2>
                <p>Повідомлення надходять дуже швидко.</p>
              </div>

              <div className='info_feature'>
                <h2>Зручний</h2>
                <p>Простий та інтуїтивний інтерфейс.</p>
              </div>

              <div className='info_feature'>
                <h2>Соціальний</h2>
                <p>Безліч групових чатів.</p>
              </div>

            </div>
          </div>

          <div className='registration'>

            <div className='registration_block'>

              <div className='logo_chat'>
                <h2><span>KPD</span>CHAT</h2>
                <img src ={logo_kpd} alt = ""/>
              </div>

              <div className='registration_block_description'>
                <p>
                  Обери <span>імʼя користувача</span> та <span>фото профілю</span>, щоб продовжити
                </p>
              </div>


              <div className='registration_block_input'>

                <div className='img_radius'>
                  <form action = "kpdchat-frontend/src/components">
                    <img src ={img_add_photo} alt = ""/>
                  </form>
                </div>
                <input type = "text" placeholder='Імʼя користувача'/>

              </div>

              <div className='registration_block_authorization'>

                <div className='registration_logIn'>
                  <button>Увійти</button>
                </div>

                <div>
                  <span>або</span>
                </div>

                <div className='registration_singIn'>
                  <button>Зареєструватись</button>
                </div>

              </div>
            </div>
          </div>

        </div>
  );
}
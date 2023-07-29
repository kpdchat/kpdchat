import React from 'react';
import img_1 from '../../images/RegistrationWindow/img_1.png'
import img_2 from '../../images/RegistrationWindow/img_2.png'
import img_3 from '../../images/RegistrationWindow/img_3.png'
import img_4 from '../../images/RegistrationWindow/img_4.png'
import img_5 from '../../images/RegistrationWindow/img_5.png'
import img_6 from '../../images/RegistrationWindow/img_6.png'
import img_7 from '../../images/RegistrationWindow/img_7.png'
import img_8 from '../../images/RegistrationWindow/img_8.png'
import logo_kpd from '../../images/RegistrationWindow/img_9.png'
import img_10 from '../../images/RegistrationWindow/img_10.png'

export function RegistrationWindow() {

  return (
      <div>

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
                <img src ={img_1} alt = ""/>
                <img src ={img_2} alt = ""/>
                <img src ={img_3} alt = ""/>
                <img src ={img_4} alt = ""/>
                <img src ={img_5} alt = ""/>
                <img src ={img_6} alt = ""/>
                <img src ={img_7} alt = ""/>
                <img src ={img_8} alt = ""/>
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
                    <img src ={img_10} alt = ""/>
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
      </div>
  );
}
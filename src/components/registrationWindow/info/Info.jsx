import React from 'react';
import img from '../../../images/registrationWindow/puzzles_img.png';

export default function Info() {
    return (
        <div className='info'>
            <div className='info__block'>
                <div>
                    <h1><span>KPD</span>CHAT</h1>
                    <p>Ласкаво просимо у світ швидкого та зручного спілкування!</p>
                    <p>Приєднуйся до нас та розпочни неймовірні розмови просто зараз.</p>
                </div>

                <div className='info__img'>
                    <img src={ img } alt='' />
                </div>

                <div className='info-feature'>
                    <div className='info-feature__title'>
                        <h2>Швидкий</h2>
                        <span>Повідомлення надходять дуже швидко.</span>
                    </div>

                    <div className='info-feature__title'>
                        <h2>Зручний</h2>
                        <span>Простий та інтуїтивний інтерфейс.</span>
                    </div>

                    <div className='info-feature__title'>
                        <h2>Соціальний</h2>
                        <span>Безліч групових чатів.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

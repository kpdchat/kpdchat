import React from 'react';
import puzzle_img from '../../../images/registrationWindow/puzzles_img.png';

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
                    <img src={ puzzle_img } alt='' />
                </div>

                <div className='info-feature'>
                    <div className='info-feature__title'>
                        <h2>Швидкий</h2>
                        <p>Повідомлення надходять дуже швидко.</p>
                    </div>

                    <div className='info-feature__title'>
                        <h2>Зручний</h2>
                        <p>Простий та інтуїтивний інтерфейс.</p>
                    </div>

                    <div className='info-feature__title'>
                        <h2>Соціальний</h2>
                        <p>Безліч групових чатів.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

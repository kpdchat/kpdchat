import React from 'react';

export default function RegistrationAuthorization({onDisplay}) {
    function onBtnClick() {
        onDisplay()
    }

    return (
        <div className='registration__authorization'>
            <div className='registration__log-in'>
                <button onClick={ onBtnClick }>Увійти</button>
            </div>

            <div className='registration-divider'>
                <span>або</span>
            </div>

            <div className='registration__sing-in'>
                <button>Зареєструватись</button>
            </div>
        </div>
    );
}

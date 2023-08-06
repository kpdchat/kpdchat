import React from 'react';
import close from '../../../images/RegistrationWindow/close.png'
import random_photo from '../../../images/RegistrationWindow/random_photo.png'

export default function ModalAddPhotos({onClose}) {

    return (
        <>
            <div className='modal-background' onClick={ onClose }></div>
            <div className='modal__content'>

                <div className='modal__content-close'>
                    <img src={ close } alt='close modal' onClick={ onClose } />
                </div>

                <div className='modal__content-column'>
                    <div className='title'>Твій Профіль</div>
                    <div className='modal__content-columnLine'></div>
                    <div className='sub-title'>Ім'я</div>
                    <div className='add-link'>
                        <input type="text" placeholder="Введіть ім'я користувача" />
                    </div>
                    <div className='modal__content-columnLine'></div>
                    <div className='sub-title'>Посилання на фото</div>
                    <div className='add-link'>
                        <input type="text" placeholder='Твій лінк для фото...' />
                    </div>
                </div>

                <div className='modal__content-columnLine'></div>

                <div className='modal__content-column'>
                    <div className='sub-title'>Фото</div>
                    <div className='img'>
                        <img src={ random_photo } alt='' />
                    </div>
                    <div className='button' onClick={ onClose }>
                        <button>Зареєструватися</button>
                    </div>
                </div>
            </div>
        </>
    );
}

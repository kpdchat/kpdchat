import React, {useState} from 'react';
import img_add_photo from "../../../images/RegistrationWindow/add_photo_img.png";
import {ModalAddPhotos} from "./ModalAddPhotos";

export function RegistrationInput() {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className='registration-block__input'>
                <div className='add-images'>
                    <img src={ img_add_photo } alt="add photos" onClick={ () => setModal(true) } />
                </div>
                <input type="text" placeholder='Імʼя користувача' />

                { modal && <ModalAddPhotos onClose={ () => setModal(false) } /> }
            </div>
        </>
    );
}

import React from 'react';
import close from '../../../images/RegistrationWindow/close.png'
import add_photo_link from '../../../images/RegistrationWindow/add_photo_link.png'
import random_photo from '../../../images/RegistrationWindow/random_photo.png'

export function ModalAddPhotos({ onClose }) {

  return (
    <>
      <div className='modal-background' onClick={onClose}></div>
      <div className='modal__content'>

        <div className="modal__content-close">
          <img src={close} alt="close modal" onClick={onClose} />
        </div>

        <div className="modal__content-column">
          <div className="title">Photo</div>
          <div className="add-image" onClick={onClose}>
            <img src={add_photo_link} alt="link for photos" />
          </div>
        </div>

        <div className="modal__content-columnLine"></div>

        <div className="modal__content-column">
          <div className="title">Image</div>
          <div className="img">
            <img src={random_photo} alt="" />
          </div>
          <div className="button" onClick={onClose}>
            <button>Встановити</button>
          </div>
        </div>
      </div>
    </>
  );
}
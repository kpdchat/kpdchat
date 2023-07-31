import React from 'react';
import close from '../../../images/RegistrationWindow/close.png'
import add_photo_link from '../../../images/RegistrationWindow/add_photo_link.png'
import random_photo from '../../../images/RegistrationWindow/random_photo.png'

export function ModalAddPhotos({onClose}) {

  return (
     <>
       <div className='modal' onClick={onClose}></div>
       <div className='modal__content'>

         <div className="content__close">
           <img src ={close} alt = "close modal" onClick={onClose}/>
         </div>

         <div className="content__column">
           <div className="content__title">Photo</div>
           <div className="content__add-image">
             <img src = {add_photo_link} alt = ""/>
           </div>
         </div>

         <div className="content__column-line"></div>

         <div className="content__column">
           <div className="content__title">Image</div>
           <div className="content__img">
             <img src = {random_photo} alt = ""/>
           </div>
           <div className="content__button">
             <button>Встановити</button>
           </div>
         </div>
       </div>
     </>
  );
}
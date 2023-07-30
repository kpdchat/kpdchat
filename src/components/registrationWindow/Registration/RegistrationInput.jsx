import React from 'react';
import img_add_photo from "../../../images/RegistrationWindow/add_photo_img.png";

export function RegistrationInput() {
  return (
     <div className='registration-block__input'>

       <div className='add-images'>
           <img src ={img_add_photo} alt = ""/>
       </div>
       <input type = "text" placeholder='Імʼя користувача'/>
     </div>
  );
}
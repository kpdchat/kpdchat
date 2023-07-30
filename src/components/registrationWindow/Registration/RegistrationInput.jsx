import React from 'react';
import img_add_photo from "../../../images/RegistrationWindow/add_photo_img.png";

export function RegistrationInput() {
  return (
     <div className='registration_block_input'>

       <div className='img_radius'>
           <img src ={img_add_photo} alt = ""/>
       </div>
       <input type = "text" placeholder='Імʼя користувача'/>
     </div>
  );
}
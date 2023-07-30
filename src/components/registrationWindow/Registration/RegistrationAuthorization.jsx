import React from 'react';

export function RegistrationAuthorization() {
  return (
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
  );
}
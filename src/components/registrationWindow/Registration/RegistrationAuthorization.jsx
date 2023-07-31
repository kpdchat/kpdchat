import React from 'react';

export function RegistrationAuthorization() {
  return (
     <div className='registration__authorization'>
       <div className='registration__log-in'>
         <button>Увійти</button>
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
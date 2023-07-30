import React from 'react';

export function ModalAddPhotos({active, setActive}) {
  return (
     <div className='modal' onClick={() => setActive(false)}>
       <div className='modal__content' onClick={e => e.stopPropagation()}>

       </div>
     </div>

  );
}

// onClick={() => setActive(false)} - повесить на значек крестика, чтобы при нажатии закрывалось модальное окно
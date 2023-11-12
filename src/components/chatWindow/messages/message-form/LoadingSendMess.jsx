import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingSendMess() {
  return (
      <div className='loading-sendmess'>
          <div className='loading-sendmess__content'>
              <DotSpinner size={ 35 } speed={ 0.6 } color='#38328A' />
          </div>
      </div>
  );
}

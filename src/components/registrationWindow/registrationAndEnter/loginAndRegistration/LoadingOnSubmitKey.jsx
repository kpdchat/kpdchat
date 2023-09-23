import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnSubmitKey() {
    return (
        <div className='loading-key-container'>
            <div className='loading-key'>
                <DotSpinner size={ 40 } speed={ 0.9 } color='#38328A' />
            </div>
        </div>
    );
}

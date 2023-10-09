import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnSubmitForm() {
    return (
        <div className='loading-form-container'>
            <div className='loading-form'>
                <DotSpinner size={ 80 } speed={ 0.9 } color='#38328A' />
            </div>
        </div>
    );
}

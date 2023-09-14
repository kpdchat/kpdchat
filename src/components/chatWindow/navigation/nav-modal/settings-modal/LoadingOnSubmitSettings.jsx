import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnSubmitSettings() {
    return (
        <div className='loading-settings-container'>
            <div className='loading-settings'>
                <DotSpinner size={ 40 } speed={ 0.9 } color='#38328A' />
            </div>
        </div>
    );
}

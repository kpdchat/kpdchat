import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnEnterChat() {
    return (
        <div className='loading-enterchat-container'>
            <div className='loading-enterchat'>
                <DotSpinner size={ 40 } speed={ 0.9 } color='#38328A' />
            </div>
        </div>
    );
}

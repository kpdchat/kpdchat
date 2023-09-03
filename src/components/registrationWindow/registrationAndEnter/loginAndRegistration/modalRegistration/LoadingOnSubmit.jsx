import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnSubmit({size = 40, speed = 0.9, color = 'black'}) {
    return (
        <div className='loading-form-container'>
            <div className='loading-form'>
                <DotSpinner size={ size } speed={ speed } color={ color } />
            </div>
        </div>
    );
}

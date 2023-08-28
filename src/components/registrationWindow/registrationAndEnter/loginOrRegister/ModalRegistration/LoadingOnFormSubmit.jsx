import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnFormSubmit({size = 40, speed = 0.9, color = 'black'}) {
    return (
        <div className='loading-container'>
            <div className='loading'>
                <DotSpinner size={ size } speed={ speed } color={ color } />
            </div>
        </div>
    );
}

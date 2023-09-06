import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnSubmitKey({size = 40, speed = 0.9, color = 'black'}) {
    return (
        <div className='loading-key-container'>
            <div className='loading-key'>
                <DotSpinner size={ size } speed={ speed } color={ color } />
            </div>
        </div>
    );
}

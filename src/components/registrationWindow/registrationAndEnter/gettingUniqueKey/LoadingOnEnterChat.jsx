import React from 'react';
import {DotSpinner} from '@uiball/loaders';

export default function LoadingOnEnterChat({size = 40, speed = 0.9, color = 'black'}) {
    return (
        <div className='loading-enterchat-container'>
            <div className='loading-enterchat'>
                <DotSpinner size={ size } speed={ speed } color={ color } />
            </div>
        </div>
    );
}

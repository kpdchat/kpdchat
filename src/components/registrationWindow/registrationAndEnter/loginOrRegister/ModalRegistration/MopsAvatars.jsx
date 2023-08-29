import React from 'react';

export default function MopsAvatars({src, alt, value}) {
    return (
        <div className='img'>
            <img
                src={ src }
                alt={ alt }
                onClick={ () => value.onePickAvatar(src) }
            />
        </div>
    );
}

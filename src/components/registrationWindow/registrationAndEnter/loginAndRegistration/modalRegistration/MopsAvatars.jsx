import React from 'react';

export default function MopsAvatars({src, alt, value, pictureLink}) {
    return (
        <div className='img'>
            <img
                className={ pictureLink === src ? 'mops-img active-img' : 'mops-img dogs-img' }
                src={ src }
                alt={ alt }
                onClick={ () => value.onePickAvatar(src) }
            />
        </div>
    );
}

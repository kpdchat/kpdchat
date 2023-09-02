import React from 'react';

export default function MopsAvatars({src, alt, value, index}) {
    const isActiveDog = value.activeDogImg === index;

    return (
        <div className='img'>
            <img
                className={ `${isActiveDog ? 'active-img' : 'dogs-img'}` }
                src={ src }
                alt={ alt }
                onClick={ () => value.onePickAvatar(src, index) }
            />
        </div>
    );
}

import React, {useState} from 'react';

export default function LanguageButton() {
    const [active, setActive] = useState(true)

    function activeButton() {
        setActive(!active)
    }

    return (
        <div className='language-buttons'>
            <button onClick={ activeButton } className={ active ? 'active' : 'default' }>UA</button>
            <button onClick={ activeButton } className={ active ? 'default' : 'active' }>EN</button>
        </div>
    );
}

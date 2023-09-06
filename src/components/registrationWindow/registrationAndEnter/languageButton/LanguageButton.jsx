import React, {useState} from 'react';

export default function LanguageButton() {
    const [active, setActive] = useState('UA')

    function activeButton(language) {
        setActive(language)
    }

    return (
        <div className='language-buttons'>
            <button onClick={ () => activeButton('UA') } className={ active === 'UA' ? 'active' : 'default' }>UA</button>
            <button onClick={ () => activeButton('EN') } className={ active === 'EN' ? 'active' : 'default' }>EN</button>
        </div>
    );
}

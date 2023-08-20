import React, {useState} from 'react';

export default function RegistrationInput() {
    const [uniKey, setUniKey] = useState('');
    const [uniKeyActive, setUniKeyActive] = useState(false);
    const [uniKeyError, setUniKeyError] = useState('')

    function uniKeyHandler(e) {
        setUniKey(e.target.value)
        if (!e.target.value) {
            setUniKeyError('Це поле обов\'язкове для заповнення')
        } else {
            setUniKeyError('')
        }
    }

    function blurHandler(e) {
        if (e.target.name) {
            setUniKeyActive(true);
        } else {
            setUniKeyActive(false);
        }
    }


    return (
        <>
            <div className={ `registration-block__input ${ uniKeyActive && uniKeyError ? 'error-border' : '' }` }>
                <input
                    value={ uniKey }
                    onChange={ e => uniKeyHandler(e) }
                    onBlur={ e => blurHandler(e) }
                    name='uniKey'
                    required
                    type='text'
                    placeholder='Унікальний ідентифікатор'
                />
            </div>
            { uniKeyActive && uniKeyError && <p className='error'>{ uniKeyError }</p> }
        </>
    );
}

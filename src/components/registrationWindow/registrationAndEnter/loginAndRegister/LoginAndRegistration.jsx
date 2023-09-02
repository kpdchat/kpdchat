import React from 'react';
import useLoginAndRegistrationLogic from './useLoginAndRegistrationLogic';
import ModalRegistration from './ModalRegistration/ModalRegistration';

export default function LoginAndRegistration({setUniKey}) {
    const state = useLoginAndRegistrationLogic();

    return (
        <>
            <div className='registration-block__description'>
                <p>Для входу в чат потрібно ввести унікальний ключ</p>
            </div>

            <div className='registration-block__input'>
                <input
                    value={ state.uniKey }
                    onChange={ state.onChangeUniqueKey }
                    onBlur={ state.onChangeUniqueKey }
                    name='uniKey'
                    required
                    type='text'
                    placeholder='Унікальний ключ'
                />
            </div>
            { state.uniKeyError && <p className='uniKey-error'>{ state.uniKeyError }</p> }

            <div className='registration__authorization'>
                <div className='registration__log-in'>
                    <button onClick={ state.onDisplay }>Увійти</button>
                </div>

                <div className='registration-divider'>
                    <span>або</span>
                </div>

                <div className='registration__sing-in'>
                    <button onClick={ () => state.setModal(true) }>Зареєструватись</button>
                </div>

                { state.modal && <ModalRegistration setUniKey={ setUniKey } onClose={ () => state.setModal(false) } /> }
            </div>
        </>
    );
}

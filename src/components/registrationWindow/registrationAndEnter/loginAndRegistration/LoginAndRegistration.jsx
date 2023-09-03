import React from 'react';
import useLoginAndRegistrationLogic from './useLoginAndRegistrationLogic';
import ModalRegistration from './modalRegistration/ModalRegistration';
import LoadingOnSubmitKey from './LoadingOnSubmitKey';

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
                { state.isLoading && <LoadingOnSubmitKey /> }
            </div>
            { state.uniKeyError && <p className='uniKey-error'>{ state.uniKeyError }</p> }

            <div className='registration__authorization'>
                <div className='registration__log-in'>
                    <button
                        onClick={ state.onUniqueKeySubmit }
                    >
                        Увійти
                    </button>
                </div>

                <div className='registration-divider'>
                    <span>або</span>
                </div>

                <div className='registration__sing-in'>
                    <button
                        onClick={ () => state.setModal(true) }
                    >
                        Зареєструватись
                    </button>
                </div>
                { state.modal && <ModalRegistration setUniKey={ setUniKey } onClose={ () => state.setModal(false) } /> }
            </div>
        </>
    );
}

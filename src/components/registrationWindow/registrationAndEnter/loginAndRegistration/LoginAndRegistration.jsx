import React from 'react';
import useLoginAndRegistrationLogic from './useLoginAndRegistrationLogic';
import ModalRegistration from './modalRegistration/ModalRegistration';
import LoadingOnSubmitKey from './LoadingOnSubmitKey';
import {useTranslation} from 'react-i18next';

export default function LoginAndRegistration({setUniKey}) {
    const state = useLoginAndRegistrationLogic();
    const { t } = useTranslation();

    return (
        <>
            <div className='registration-block__description'>
                <p>{t('registration.description')}</p>
            </div>

            <div className='registration-block__input'>
                <input
                    value={ state.uniKey }
                    onChange={ state.onChangeUniqueKey }
                    onBlur={ state.onChangeUniqueKey }
                    name='uniKey'
                    required
                    type='text'
                    placeholder={t('registration.input-unikey')}
                />
                { state.isLoading && <LoadingOnSubmitKey /> }
            </div>
            { state.uniKeyError && <p className='uniKey-error'>{ state.uniKeyError }</p> }
            { state.notFoundUser && <p className='uniKey-error'>{ state.notFoundUser }</p> }

            <div className='registration__authorization'>
                <div className='registration__log-in'>
                    <button
                        onClick={ state.onUniqueKeySubmit }
                    >
                        { t('registration.button-sign-in') }
                    </button>
                </div>

                <div className='registration-divider'>
                    <span>{ t('registration.divider-span') }</span>
                </div>

                <div className='registration__sing-in'>
                    <button
                        onClick={ () => state.setModal(true) }
                    >
                        { t('registration.button-sing-up') }
                    </button>
                </div>
                { state.modal && <ModalRegistration setUniKey={ setUniKey } onClose={ () => state.setModal(false) } /> }
            </div>
        </>
    );
}

import React from 'react';
import useLoginAndRegistrationLogic from './useLoginAndRegistrationLogic';
import ModalRegistration from './modalRegistration/ModalRegistration';
import LoadingOnSubmitKey from './LoadingOnSubmitKey';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectLoader} from '../../../../store/selectors';

export default function LoginAndRegistration({setUniKey}) {
    const state = useLoginAndRegistrationLogic();
    const isLoader = useSelector(selectLoader);
    const {t} = useTranslation();

    return (
        <>
            <div className='form__description'>
                <p>{ t('registration.description') }</p>
            </div>

            <div className='form__input'>
                <textarea
                    className='scroll-bar'
                    value={ state.uniKey }
                    onChange={ state.onChangeUniqueKey }
                    onBlur={ state.onChangeUniqueKey }
                    name='uniKey'
                    required
                    rows='1'
                    ref={ state.uniKeyRef }
                    placeholder={ t('registration.input-unikey') }
                />
                { isLoader && <LoadingOnSubmitKey /> }
            </div>
            { state.uniKeyError && <p className='form__uniKey-error'>{ t(state.uniKeyError) }</p> }

            <div className='form__authorization authorization mt-24px'>
                <div className='authorization__log-in'>
                    <button
                        className='text-inter-18-500'
                        onClick={ state.onUniqueKeySubmit }
                    >
                        { t('registration.button-sign-in') }
                    </button>
                </div>

                <div className='authorization__divider'>
                    <span>{ t('registration.divider-span') }</span>
                </div>

                <div className='authorization__sing-in'>
                    <button
                        className='text-inter-18-500'
                        onClick={ () => state.setModal(true) }
                    >
                        { t('registration.button-sing-up') }
                    </button>
                </div>
                { state.modal && <ModalRegistration setUniKey={ setUniKey } onClose={ state.resetUnikey } /> }
            </div>
        </>
    );
}

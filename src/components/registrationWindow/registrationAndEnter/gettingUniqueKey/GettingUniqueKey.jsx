import React from 'react';
import useGettingUniqueKeyLogic from './useGettingUniqueKeyLogic';
import LoadingOnEnterChat from './LoadingOnEnterChat';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectLoader } from '../../../../store/selectors';

export default function GettingUniqueKey({uniKey, setUniKey}) {
    const state = useGettingUniqueKeyLogic({uniKey, setUniKey});
    const isLoader = useSelector(selectLoader);
    const { t } = useTranslation();

    return (
        <>
            <div className='form__enter enter'>
                <div className='enter__title'>
                    <p>{ t('registration.enter-title') }</p>
                </div>

                <div className='enter__description text-inter-18-500'>
                    <p>{ t('registration.enter-description') }</p>
                </div>

                <div className='enter__copy-key copy-key'>
                    <form className='copy-key__form'>
                        <div className='copy-key__form-input'>
                            <textarea
                                className='text-inter-18-500'
                                value={ uniKey }
                                readOnly
                            />
                            { isLoader && <LoadingOnEnterChat /> }
                        </div>

                        <p className={ `copy-message ${state.copyActiveMessage ? 'show' : ''}` }>{ t(state.copyActiveMessage) }</p>

                        <div className='copy-key__form-buttons buttons-copy'>
                            <div className='buttons-copy__copy'>
                                <button
                                    onClick={ state.handleCopyChange }
                                    className={ `buttons ${ !state.copyActive
                                        ? 'active-button'
                                        : 'inactive-button' }`
                                    }>
                                    { t('registration.button-copy') }
                                </button>
                            </div>

                            <div className='buttons-copy__enter'>
                                <button
                                    onClick={ state.handleEnterChange }
                                    className={ `buttons ${ state.copyActive
                                        ? 'active-button'
                                        : 'inactive-button' }`
                                    }>
                                    { t('registration.button-sign-in') }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

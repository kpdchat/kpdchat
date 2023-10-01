import React from 'react';
import useGettingUniqueKeyLogic from './useGettingUniqueKeyLogic';
import LoadingOnEnterChat from './LoadingOnEnterChat';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectLoader} from '../../../../store/selectors';

export default function GettingUniqueKey({uniKey}) {
    const state = useGettingUniqueKeyLogic({uniKey});
    const isLoader = useSelector(selectLoader);
    const {t} = useTranslation();

    return (
        <>
            <div className='registration-block__enter'>
                <div className='registration-block__enter-title'>
                    <p>{ t('registration.enter-title') }</p>
                </div>

                <div className='registration-block__enter-description'>
                    <p>{ t('registration.enter-description') }</p>
                </div>

                <div className='registration-block__enter-copyKey'>
                    <form className='copyKeyForm'>
                        <div className='copyKeyForm__input'>
                            <textarea
                                value={ uniKey }
                                readOnly
                            />
                            { isLoader && <LoadingOnEnterChat /> }
                        </div>
                        { state.copyActiveMessage && <p className='copy-message'>{ t(state.copyActiveMessage) }</p> }

                        <div className='copyKeyForm__buttons'>
                            <div className='copyKeyForm__buttons-copy'>
                                <button
                                    onClick={ state.handleCopyChange }
                                    className={ !state.copyActive ? 'buttons active-copy' : 'buttons inactive-copy' }
                                >
                                    { t('registration.button-copy') }
                                </button>
                            </div>

                            <div className='copyKeyForm__buttons-enter'>
                                <button
                                    onClick={ state.handleEnterChange }
                                    className={ state.copyActive
                                        ? 'buttons active-enter'
                                        : 'buttons inactive-enter'
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

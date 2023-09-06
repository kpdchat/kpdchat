import React from 'react';
import useGettingUniqueKeyLogic from './useGettingUniqueKeyLogic';
import LoadingOnEnterChat from './LoadingOnEnterChat';

export default function GettingUniqueKey({uniKey}) {
    const state = useGettingUniqueKeyLogic({uniKey});

    return (
        <>
            <div className='registration-block__enter'>
                <div className='registration-block__enter-title'>
                    <p>Вітаємо, реєстрація пройшла успішно!</p>
                </div>

                <div className='registration-block__enter-description'>
                    <p>Скопіюй та збережи цей унікальний ключ, він є обовʼязковим для входу в обліковий запис.</p>
                </div>

                <div className='registration-block__enter-copyKey'>
                    <form className='copyKeyForm'>
                        <div className='copyKeyForm__input'>
                            <textarea
                                value={ uniKey }
                                readOnly
                            />
                            { state.isLoading && <LoadingOnEnterChat /> }
                        </div>
                        { state.copyActiveMessage && <p className='copy-message'>{ state.copyActiveMessage }</p> }

                        <div className='copyKeyForm__buttons'>
                            <div className='copyKeyForm__buttons-copy'>
                                <button
                                    onClick={ state.handleCopyChange }
                                    className={ !state.copyActive ? 'active-copy' : 'inactive-copy' }
                                >
                                    Скопіювати
                                </button>
                            </div>

                            <div className='copyKeyForm__buttons-enter'>
                                <button
                                    onClick={ state.handleEnterChange }
                                    className={ state.copyActive
                                        ? 'active-enter'
                                        : 'inactive-enter'
                                    }>
                                    Увійти
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import useGettingUniqueKeyLogic from './useGettingUniqueKeyLogic';

export default function GettingUniqueKey({uniKey, setUniKey}) {
    const state = useGettingUniqueKeyLogic({uniKey});

    return (
        <>
            <div className='registration-block__enter'>
                <div className='registration-block__enter-title'>
                    <span>Вітаємо, реєстрація пройшла успішно!</span>
                </div>

                <div className='registration-block__enter-description'>
                    <p>
                        Скопіюй та збережи цей унікальний ідентифікатор, він є обовʼязковим для входу в обліковий запис.
                    </p>
                </div>

                <div className='registration-block__enter-copyKey'>
                    <form className='copyKeyForm'>
                        <div className='copyKeyForm__input'>
                            <textarea
                                className='scroll-bar'
                                value={ uniKey }
                                readOnly
                                onChange={ (event) => setUniKey(event.target.value) }
                            />
                        </div>

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

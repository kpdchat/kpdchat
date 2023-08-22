import React, {useState} from 'react';

export default function GettingUniqueKey({uniKey}) {
    const [copyActive, setCopyActive] = useState(false)

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
                            />
                        </div>

                        <div className='copyKeyForm__buttons'>
                            <div className='copyKeyForm__buttons-copy'>
                                <button>
                                    Скопіювати
                                </button>
                            </div>

                            <div className='copyKeyForm__buttons-enter'>
                                <button
                                    className={ copyActive
                                        ? 'active-button'
                                        : 'inactive-button'
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

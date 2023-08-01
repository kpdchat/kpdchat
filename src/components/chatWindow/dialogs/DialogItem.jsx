import chat_logo from '../../../images/chat-window/chat_logo.png'


export default function DialogItem() {
    return (
        <>
            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Настолки у Харкові</h3>
                        <p className='text-14'> ПРИВІТ всім! Хто буде сьогодні на ...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>

            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Знайомства 20 +</h3>
                        <p className='text-14'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>new games</h3>
                        <p className='text-14'> Rail Time частина ll, вийшла на цьому</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Мистецтво_modern Ukraine</h3>
                        <p className='text-14'>Зелена галерея запрошує усіх ба...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Знайомства 20 +</h3>
                        <p className='text-14'> Шукаю хлопця з мого міста Миколаів...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Новини Луцьк</h3>
                        <p className='text-14'> Погода  буде спектна вже завтра ... </p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>OLD School | Rock</h3>
                        <p className='text-14'> Концерт в Докер-пабі на підтримку ...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>Пн</span>
                    <span className='list__new-count'>9</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Fresh огляд Toni</h3>
                        <p className='text-14'> Огляд смартфона New GAlAXY 23 A ...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Знайомства 20 +</h3>
                        <p className='text-14'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Знайомства 20 +</h3>
                        <p className='text-14'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Знайомства 20 +</h3>
                        <p className='text-14'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img onClick={() => console.log('on img click')} src={chat_logo} alt="" />
                    <div className="list__text">
                        <h3 className='title-h3'>Знайомства 20 +</h3>
                        <p className='text-14'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time'>12:28</span>
                    <span className='list__new-count'>1</span>
                </div>
            </div>
        </>
    )
}
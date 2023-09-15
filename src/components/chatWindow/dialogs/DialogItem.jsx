import React from "react";
import chat_logo from '../../../images/chat-window/chat_logo.png'

export default function DialogItem({ dialog }) {
    return (
        <>
            <div className="list__dialog">
                <div className="list__info">
                    <img src={dialog.chatPictureLink}
                     alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>{dialog.title}</h3>
                        <p className='text-inter-14-400'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
                            accusamus maxime, temporibus nisi repellat facere omnis et. Accusamus ad dignissimos
                            exercitationem repellat adipisci illum sequi nemo ex distinctio, magnam excepturi quibusdam
                            est officia soluta, sint impedit cupiditate architecto nobis sit unde eius quos, quia harum!
                            Beatae possimus obcaecati pariatur dolore nulla deleniti est repellendus, architecto,
                            recusandae libero quo assumenda voluptatibus veniam sapiente cupiditate corrupti laborum
                            officia? Nobis, pariatur quam nam rem quibusdam sint aut reiciendis et voluptates assumenda
                            corporis alias obcaecati ab ipsa vel temporibus numquam ullam veniam esse asperiores! Ipsa
                            nulla perferendis dolor impedit laboriosam ullam magnam, iusto recusandae?</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>12</span>
                </div>

            </div>

            {/* <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Знайомства 20 +</h3>
                        <p className='text-inter-14-400'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>new games</h3>
                        <p className='text-inter-14-400'> Rail Time частина ll, вийшла на цьому</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Мистецтво_modern Ukraine</h3>
                        <p className='text-inter-14-400'>Зелена галерея запрошує усіх ба...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Знайомства 20 +</h3>
                        <p className='text-inter-14-400'> Шукаю хлопця з мого міста Миколаів...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Новини Луцьк</h3>
                        <p className='text-inter-14-400'> Погода буде спектна вже завтра ... </p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>OLD School | Rock</h3>
                        <p className='text-inter-14-400'> Концерт в Докер-пабі на підтримку ...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>Пн</span>
                    <span className='list__new-count text-inter-12-400'>9</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Fresh огляд Toni</h3>
                        <p className='text-inter-14-400'> Огляд смартфона New GAlAXY 23 A ...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Знайомства 20 +</h3>
                        <p className='text-inter-14-400'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Знайомства 20 +</h3>
                        <p className='text-inter-14-400'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Знайомства 20 +</h3>
                        <p className='text-inter-14-400'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div>
            </div>

            <div className="list__dialog">
                <div className="list__info">
                    <img onClick={ () => console.log('on img click') } src={ chat_logo } alt="" />
                    <div className="list__text">
                        <h3 className='text-inter-18-600'>Знайомства 20 +</h3>
                        <p className='text-inter-14-400'> Шукаю хлопця з мого міста...</p>
                    </div>
                </div>
                <div className="list__data">
                    <span className='list__time text-inter-12-400'>12:28</span>
                    <span className='list__new-count text-inter-12-400'>1</span>
                </div> */}
            {/* </div> */}
        </>
    )
}

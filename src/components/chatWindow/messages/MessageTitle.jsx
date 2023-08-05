import chat_logo from '../../../images/chat-window/chat_logo.png'


export default function MessageTitle() {
    return (
        <div className="messages__dialog-name">
            <img src={ chat_logo } alt="" />
            <div className="messages__dialog-info">
                <h3 className='title-h3'>Настолки у Харкові</h3>
                <p className='text-14'> 245 учасників</p>
            </div>

        </div>
    )
}

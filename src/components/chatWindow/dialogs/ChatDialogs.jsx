import { ReactComponent as Logo } from '../../../images/chat-window/logo.svg'
import DialogItem from './DialogItem'
import DialogSearch from './DialogSearch'
export default function ChatDialogs() {
    return (
        <section className='chat__dialogs dialogs'>
          <div className='dialogs__logo'>
            <Logo />
            <h1> <span>kpd</span>Chat</h1>
          </div>
          <DialogSearch/>
          <div className='dialogs__list list scroll-bar'>
            <div className="list__container ">
              <DialogItem/>
            </div>

          </div>
        </section>
    )
}
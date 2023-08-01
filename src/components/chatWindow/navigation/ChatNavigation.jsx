import { ReactComponent as DarkMode } from '../../../images/chat-window/dark_mode.svg'
import { ReactComponent as Info } from '../../../images/chat-window/info.svg'
import { ReactComponent as Settings } from '../../../images/chat-window/settings.svg'
import NavFolderItem from './NavFolderItem'

export default function ChatNavigation() {
    return (
        <section className='chat__navigation navigation'>
            <div className='navigation__folders folders'>
                <div className='folders__title'>
                    <h2 className='title-h2'>папки</h2>
                </div>
                <div className='folders__container'>
                    <NavFolderItem/>
                </div>
                
            </div>
            <div className='navigation__settings'>
                <Settings />
                <Info />
                <DarkMode />
            </div>
        </section>
    )
}
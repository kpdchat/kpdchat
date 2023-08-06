import React from "react";
import {ReactComponent as DarkMode} from '../../../images/chat-window/dark_mode.svg'
import NavFolderItem from './NavFolderItem'
import NavSettings from "./NavSettings";
import NavInfo from "./NavInfo";

export default function ChatNavigation() {
    
    return (
        <section className='chat__navigation navigation'>
            <div className='navigation__folders folders'>
                <div className='folders__title'>
                    <h2 className='title-h2 '> папки</h2>
                </div>
                <div className='folders__container'>
                    <NavFolderItem />
                </div>
            </div>
            <div className='navigation__settings settings'>
                <NavSettings />
                <NavInfo />
                <DarkMode />
            </div>
        </section>
    )
}

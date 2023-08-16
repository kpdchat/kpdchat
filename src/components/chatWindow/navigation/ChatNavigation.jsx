import React from "react";
import { MdOutlineTextsms, MdOutlineDarkMode } from "react-icons/md";
import NavFolderItem from './NavFolderItem'
import NavSettings from "./NavSettings";
import NavInfo from "./NavInfo";
import AddChat from "./add-chat/AddChat";
import AddFolder from "./add-folder/AddFolder";

export default function ChatNavigation() {

    return (
        <section className='chat__navigation navigation'>
            <div className='navigation__folders folders'>
                <div className='folders__add add'>
                    <AddChat />
                    <AddFolder />
                </div>
                <div className='folders__container'>
                    <NavFolderItem />
                </div>
                <div className="folders__public">
                    <div className="folders__title cursor-pointer">
                        <MdOutlineTextsms size={17} />
                        <h3 className='text-inter-16-400'>Публічні чати</h3>
                    </div>
                </div>
            </div>
            <div className='navigation__settings settings'>
                <NavSettings />
                <NavInfo />
                <MdOutlineDarkMode size={35}/>
            </div>
        </section>
    )
}

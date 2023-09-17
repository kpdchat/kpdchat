import React from "react";
import {ReactComponent as Logo} from '../../../images/chat-window/logo.svg'
import DialogItem from './DialogItem'
import DialogSearch from './DialogSearch'
import { useSelector } from "react-redux";
import { selectRenderChatList } from "../../../store/selectors";

export default function ChatDialogs() {
    const renderChatList = useSelector(selectRenderChatList)
    console.log(renderChatList, 'renderList');
    return (
        <section className='chat__dialogs dialogs'>
            <div className='dialogs__logo'>
                <Logo />
                <h1><span>kpd</span>Chat</h1>
            </div>
            <DialogSearch />
            <div className='dialogs__list list scroll-bar'>
                <div className="list__container ">
                    {renderChatList?.map(chat =><DialogItem chat={chat}  key={chat.id}/> )}
                </div>

            </div>
            <span></span>
        </section>
    )
}

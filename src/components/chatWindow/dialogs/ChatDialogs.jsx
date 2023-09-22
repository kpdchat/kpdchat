import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../../images/chat-window/logo.svg'
import DialogItem from './DialogItem'
import { useSelector } from "react-redux";
import { selectRenderChatList } from "../../../store/selectors";

export default function ChatDialogs() {
    const renderChatList = useSelector(selectRenderChatList)
    const [query, setQuery] = useState("")
    const { t } = useTranslation()

    const filteredChats = useMemo(() => {
        return renderChatList.filter(chat => {
            return chat.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [query, renderChatList])

    console.log(renderChatList, 'renderList');
    return (
        <section className='chat__dialogs dialogs'>
            <div className='dialogs__logo'>
                <Logo />
                <h1><span>kpd</span>Chat</h1>
            </div>
            <div className='dialogs__search'>
                <form className='search-form'>
                    <input
                        className="text-inter-16-400"
                        placeholder={t('global.search')}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </form>
            </div>
            <div className='dialogs__list list scroll-bar'>
                <div className="list__container ">
                    {filteredChats?.map(chat => <DialogItem chat={chat} index={renderChatList.indexOf(chat)} key={chat.id} />)}
                </div>
            </div>
            <span></span>
        </section>
    )
}

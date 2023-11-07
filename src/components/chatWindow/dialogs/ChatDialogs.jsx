import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { PiMagnifyingGlass } from "react-icons/pi";
import { ReactComponent as Logo } from '../../../images/chat-window/logo.svg'
import DialogItem from './DialogItem'
import { useDispatch, useSelector } from "react-redux";
import { selectSortRenderList } from "../../../store/selectors";
import emptyChats from '../../../images/chat-window/empty-chats.png'
import { clearForm, clearInputSearch, stopSearch } from '../../../store/actions/messageAction';
import { setKebabClose } from "../../../store/actions/uiActions";

export default function ChatDialogs() {
    const renderChatList = useSelector(selectSortRenderList)
    const [query, setQuery] = useState("")
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const filteredChats = useMemo(() => {
        return renderChatList?.filter(chat => {
            return chat.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [query, renderChatList])

    function onContextClick(e) {
        e.preventDefault()
    }
    function onDialogsClick() {
        dispatch(clearForm());
        dispatch(stopSearch);
        dispatch(clearInputSearch());
    }

    useEffect(() => {
        if (renderChatList?.length === 0) {
            dispatch(setKebabClose())
        }
    }, [renderChatList?.length, dispatch])
    
    if (filteredChats?.length === 0) {
        return (
            <section
                className='chat__dialogs dialogs no-select'
                onClick={onDialogsClick} >
                <div
                    className='dialogs__logo'
                    onContextMenu={onContextClick}>
                    <Logo />
                    <h1><span>kpd</span>Chat</h1>
                </div>
                <div className='dialogs__search'>
                    <form className='search-form'>
                        <PiMagnifyingGlass
                            size={24}
                            className="search-form__svg" />
                        <input
                            className="text-inter-16-400"
                            placeholder={t('global.search')}
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div
                    className='dialogs__list list list__flex'
                    onContextMenu={onContextClick}>
                    <div className="list__container">
                        <img src={emptyChats} alt="chats are empty" />
                    </div>
                </div>
                <span></span>
            </section>
        )
    }

    return (
        <section
            className='chat__dialogs dialogs no-select'
            onClick={onDialogsClick}>
            <div
                className='dialogs__logo'
                onContextMenu={onContextClick}>
                <Logo />
                <h1><span>kpd</span>Chat</h1>
            </div>
            <div className='dialogs__search'>
                <form className='search-form'>
                    <PiMagnifyingGlass
                        size={24}
                        className="search-form__svg" />
                    <input
                        className="text-inter-16-400"
                        placeholder={t('global.search')}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </form>
            </div>
            <div className='dialogs__list list scroll-bar' onContextMenu={onContextClick}>
                <div className="list__container ">
                    {filteredChats?.map(chat => <DialogItem dialog={chat} index={renderChatList.indexOf(chat)} key={chat.id} />)}
                </div>
            </div>
            <span></span>
        </section>
    )
}

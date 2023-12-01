import React, { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { PiMagnifyingGlass } from "react-icons/pi";
import { ReactComponent as Logo } from '../../../images/chat-window/logo.svg'
import DialogItem from './DialogItem'
import { useDispatch, useSelector } from "react-redux";
import { selectSortRenderList, selectUi } from "../../../store/selectors";
import emptyChats from '../../../images/chat-window/empty-chats.png'
import { clearForm, clearInputSearch, stopSearch } from '../../../store/actions/messageAction';
import { setCloseNav, setKebabClose, setOpenNav } from "../../../store/actions/uiActions";
import { AiOutlineMenu } from "react-icons/ai";

export default function ChatDialogs() {
    const renderChatList = useSelector(selectSortRenderList)
    const { isOpenMessage, isOpenNav } = useSelector(selectUi)
    const [query, setQuery] = useState("")
    const [isSearch, setIsSearch] = useState(false)
    const { t } = useTranslation()
    const search = useRef(null)
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
        if (isOpenNav) {
            dispatch(setCloseNav())
            return
        }
        dispatch(clearForm());
        dispatch(stopSearch);
        dispatch(clearInputSearch());
    }

    function onBurgerClick() {
        dispatch(setOpenNav())
        setIsSearch(false)
    }
    function onSearchClick() {
        setIsSearch(prev => !prev)
    }

    useEffect(() => {
        if (renderChatList?.length === 0) {
            dispatch(setKebabClose())
        }
    }, [renderChatList?.length, dispatch])

    useEffect(() => {
        if (isSearch) {
            search.current.style.marginTop = '15px'
        } else {
            search.current.style.marginTop = '-44px'
            setQuery('')
        }
    }, [isSearch])

    return (
        <section
            className={`chat__dialogs dialogs no-select ${isOpenMessage && 'display-none'}`}
            onClick={onDialogsClick}>
            <div
                className='dialogs__logo'
                onContextMenu={onContextClick}>
                <AiOutlineMenu
                    className="cursor-pointer dialogs__burger"
                    size={24}
                    onClick={onBurgerClick} />

                <Logo className="chat-logo" />
                <h1><span>kpd</span>Chat</h1>
                <PiMagnifyingGlass
                    size={20}
                    onClick={onSearchClick}
                    className="cursor-pointer dialogs__search-btn" />
            </div>
            <div
                className='dialogs__search'
                ref={search}>
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
                {filteredChats?.length
                    ? <div className="list__container ">
                        {filteredChats?.map(chat =>
                            <DialogItem
                                dialog={chat}
                                index={renderChatList.indexOf(chat)}
                                key={chat.id} />)}
                    </div>
                    : <div className="list__flex">
                        <img
                            className="list__empty-img"
                            src={emptyChats}
                            alt="chats are empty" />
                    </div>
                }
            </div>
            <span></span>
        </section>
    )
}

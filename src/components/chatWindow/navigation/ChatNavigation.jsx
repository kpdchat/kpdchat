import React, { useEffect, useRef } from 'react';
import { PiFolderUser, PiWechatLogo, PiArrowLeft } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectListName, selectUi, selectUser } from '../../../store/selectors';
import { fetchChats, setRenderList, setRenderListName } from '../../../store/actions/chatActions';
import NavFolderItem from './NavFolderItem';
import AddChatModal from "./add-chat/AddChatModal";
import JoinChatModal from "../messages/mes-modal/JoinChatModal";
import ChatOutModal from "../messages/mes-modal/ChatOutModal";
import NavSettings from './NavSettings';
import NavInfo from './NavInfo';
import AddChat from './add-chat/AddChat';
import AddFolder from './add-folder/AddFolder';
import FolderDeleteModal from './nav-modal/FolderDeleteModal';
import AddFolderModal from './add-folder/AddFolderModal';
import DeleteFromFolderModal from './nav-modal/DeleteFromFolderModal';
import SettingsModal from './nav-modal/settings-modal/SettingsModal';
import NavInfoModal from './nav-modal/NavInfoModal';
import NavTheme from './NavTheme';
import CopyModal from '../messages/mes-modal/CopyModal';
import DeleteMessageModal from '../messages/mes-modal/DeleteMessageModal';
import { clearForm, clearInputSearch, stopSearch } from '../../../store/actions/messageAction';
import { setCloseMessage, setCloseNav } from '../../../store/actions/uiActions';
import AboutUser from './AboutUser';

export default function ChatNavigation() {
    const { t } = useTranslation();
    const user = useSelector(selectUser);
    const listName = useSelector(selectListName);
    const { isModal, modalId, isOpenNav } = useSelector(selectUi);
    const navigation = useRef(null)
    const dispatch = useDispatch();

    function onPublicChatClick() {
        dispatch(setRenderListName('chats'));
    }

    function onMineChatsClick() {
        dispatch(setRenderListName('mineChats'));
    }

    function onContextClick(e) {
        e.preventDefault();
    }

    function onNavigationClick() {
        dispatch(clearForm());
        dispatch(stopSearch);
        dispatch(clearInputSearch());
        dispatch(setCloseMessage())
    }

    function onCloseNavClick() {
        dispatch(setCloseNav())
    }

    useEffect(() => {
        if (listName === 'mineChats') {
            dispatch(setRenderList(user.chats));
        } else if (listName === 'chats') {
            dispatch(fetchChats());
        }
    }, [listName, user, dispatch])

    useEffect(() => {
        if (isOpenNav) {
            navigation.current.style.transform = 'translateX(0%)'
        } else {
            navigation.current.style.transform = 'translateX(-100%)'
        }
    }, [isOpenNav])

    return (
        <>
            <section
                className='chat__navigation navigation no-select'
                onContextMenu={onContextClick}
                onClick={onNavigationClick}
                ref={navigation}>
                <PiArrowLeft
                    onClick={onCloseNavClick}
                    className='navigation__back cursor-pointer'
                    size={24} />
                <AboutUser />
                <div
                    className='navigation__folders folders'
                    onClick={onCloseNavClick}>
                    <div className='folders__add add'>
                        <AddChat />
                        <AddFolder />
                    </div>
                    <div className='folders__container'>
                        <div
                            className={listName === 'mineChats' ? 'folders__folder folders__folder_active' : 'folders__folder'}>
                            <div
                                onClick={onMineChatsClick}
                                className='folders__title cursor-pointer'>
                                <PiFolderUser size={24} className='folder-icon' />
                                <h3 className='text-inter-16-400'>{t('navigation.mine')}</h3>
                            </div>
                            <h3 className='text-inter-16-400 ml-5px'>{user.chats.length}</h3>
                        </div>
                        {user?.folders?.map(folder => <NavFolderItem key={folder.id} folder={folder} />)}
                    </div>
                    <div className='folders__public-container'>
                        <div
                            className={listName === 'chats' ? 'folders__public folders__public_active' : 'folders__public'}>
                            <div
                                onClick={onPublicChatClick}
                                className='folders__title folders__title-public cursor-pointer'>
                                <PiWechatLogo size={24} />
                                <h3 className='text-inter-16-400'>{t('navigation.public')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='navigation__settings settings'
                    onClick={onCloseNavClick}>
                    <NavSettings />
                    <NavInfo />
                    <NavTheme />
                </div>
                <div className="navigation__logo">
                    <h2>
                        KPD<span>CHAT</span>
                    </h2>
                </div>
            </section>
            {isModal && modalId === 'delete-from-folder' && <DeleteFromFolderModal />}
            {isModal && modalId === 'delete-folder' && <FolderDeleteModal />}
            {isModal && modalId === 'leave chat' && <ChatOutModal />}
            {isModal && modalId === 'join-chat' && <JoinChatModal />}
            {isModal && modalId === 'edit-folder' && <AddFolderModal />}
            {isModal && modalId === 'settings' && <SettingsModal />}
            {isModal && modalId === 'create-chat' && <AddChatModal />}
            {isModal && modalId === 'create-folder' && <AddFolderModal />}
            {isModal && modalId === 'info' && <NavInfoModal />}
            {isModal && modalId === 'copy-modal' && <CopyModal />}
            {isModal && modalId === 'delete-message' && <DeleteMessageModal />}
        </>
    )
}

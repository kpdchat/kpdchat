import React, { useEffect } from "react";
import { MdOutlineTextsms, MdOutlineDarkMode, MdOutlineFolderShared } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from "react-redux";
import { selectListName, selectUi, selectUser } from "../../../store/selectors";
import { fetchPublicChats, setRenderList, setRenderListName } from "../../../store/actions/chatActions";
import NavFolderItem from './NavFolderItem'
import NavSettings from "./NavSettings";
import NavInfo from "./NavInfo";
import AddChat from "./add-chat/AddChat";
import AddFolder from "./add-folder/AddFolder";
import FolderDeleteModal from "./nav-modal/FolderDeleteModal";
import AddFolderModal from "./add-folder/AddFolderModal";
import DeleteFromFolderModal from "./nav-modal/DeleteFromFolderModal";
import SettingsModal from './nav-modal/settings-modal/SettingsModal';

export default function ChatNavigation() {
    const { t } = useTranslation()
    const user = useSelector(selectUser)
    const listName = useSelector(selectListName)
    const { isModal, modalId } = useSelector(selectUi)
    const dispatch = useDispatch()

    function onPublicChatClick() {
        dispatch(setRenderListName('publicChats'))
    }
    function onMineChatsClick() {
        dispatch(setRenderListName('mineChats'))
    }

    useEffect(() => {
        if (listName === 'mineChats') {
            dispatch(setRenderList(user.chats))
        }
        else if (listName === 'publicChats') {
            dispatch(fetchPublicChats())
        }
    }, [listName, user, dispatch])

    return (
        <>
            <section className='chat__navigation navigation'>
                <div className='navigation__folders folders'>
                    <div className='folders__add add'>
                        <AddChat />
                        <AddFolder />
                    </div>
                    <div className='folders__container'>
                        <div className={listName === 'mineChats' ? 'folders__folder folders__folder_active' : 'folders__folder'}>
                            <div
                                onClick={onMineChatsClick}
                                className="folders__title cursor-pointer">
                                <MdOutlineFolderShared size={24} />
                                <h3 className='text-inter-16-400'>{t('navigation.mine')}</h3>
                            </div>
                            <h3 className='text-inter-16-400 ml-5px'>{user.chats.length}</h3>
                        </div>
                        {user?.folders?.map(folder => <NavFolderItem key={folder.id} folder={folder} />)}
                    </div>
                    <div className='folders__public-container'>
                        <div className={listName === 'publicChats' ? 'folders__public folders__public_active' : 'folders__public'}>
                            <div
                                onClick={onPublicChatClick}
                                className="folders__title folders__title-public cursor-pointer">
                                <MdOutlineTextsms size={24} />
                                <h3 className='text-inter-16-400'>{t('navigation.public')}</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='navigation__settings settings'>
                    <NavSettings />
                    <NavInfo />
                    <MdOutlineDarkMode size={35} className="cursor-pointer" />
                </div>
            </section>
            {isModal && modalId === 'edit-folder' && <AddFolderModal />}
            {isModal && modalId === 'delete-from-folder' && <DeleteFromFolderModal />}
            {isModal && modalId === 'delete-folder' && <FolderDeleteModal />}
            {isModal && modalId === 'settings' && <SettingsModal />}
        </>
    )
}

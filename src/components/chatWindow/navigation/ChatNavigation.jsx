import React from "react";
import { MdOutlineTextsms, MdOutlineDarkMode, MdOutlineFolderShared } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import NavFolderItem from './NavFolderItem'
import NavSettings from "./NavSettings";
import NavInfo from "./NavInfo";
import AddChat from "./add-chat/AddChat";
import AddFolder from "./add-folder/AddFolder";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../store/selectors";
import { fetchPublicChats, setRenderList } from "../../../store/actions/chatActions";
import { fetchUser } from "../../../store/actions/userActions";

export default function ChatNavigation() {
    const { t } = useTranslation()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    function onPublicChatClick() {
        dispatch(fetchPublicChats())
    }
    function onMineChatsClick() {
        dispatch(fetchUser(user.id))
        dispatch(setRenderList(user.chats))
    }

    return (
        <section className='chat__navigation navigation'>
            <div className='navigation__folders folders'>
                <div className='folders__add add'>
                    <AddChat />
                    <AddFolder />
                </div>
                <div className='folders__container'>
                    <div className='folders__folder'>
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
                    <div className="folders__public">
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
    )
}

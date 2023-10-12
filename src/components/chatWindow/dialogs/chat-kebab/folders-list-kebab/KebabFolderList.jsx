import React from "react";
import { PiFolderPlus, PiArrowLeft } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { selectFolderList, selectUser } from "../../../../../store/selectors";
import { useTranslation } from "react-i18next";
import { setModalOpen } from "../../../../../store/actions/uiActions";
import SelectFolder from "./SelectFolder";
import UnSelectFolder from "./UnSelectFolder";


export default function KebabFolderList({ setOpen }) {
    const dispatch = useDispatch()
    const selectFolders = useSelector(selectFolderList)
    const user = useSelector(selectUser)
    const { t } = useTranslation()

    function onAddFolderClick(e) {
        e.stopPropagation()

        dispatch(setModalOpen('create-folder'))
    }
    function onBackClick(e) {
        e.stopPropagation()

        setOpen(prev => !prev)
    }
    return (
        <>
            <div className="chat-kebab__folders">
                <div
                    className="chat-kebab__row cursor-pointer"
                    onClick={onBackClick}
                >
                    <PiArrowLeft size={24} />
                    <p className="text-inter-16-400">{t('chat-context-menu.return')}</p>
                </div>
                <div>
                    {user.folders.map(folder => {
                        if (selectFolders.includes(folder.id)) {
                            return <SelectFolder folder={folder} key={folder.id} />
                        } else {
                            return <UnSelectFolder folder={folder} key={folder.id} />
                        }
                    })}
                </div>

                <div
                    className="chat-kebab__row chat-kebab__row_violet cursor-pointer"
                    onClick={onAddFolderClick}>
                    <PiFolderPlus size={24} />
                    <p className="text-inter-16-400">{t('chat-context-menu.newFolder')}</p>
                </div>
            </div>
        </>
    )
}
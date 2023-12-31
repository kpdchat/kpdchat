import React from "react";
import { icons } from "../../../../../extra/config/vocabulary/folder-icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectChat, selectUi } from "../../../../../store/selectors";
import { fetchUpdateKebabFolder } from "../../../../../store/actions/folderActions";
import { DotSpinner } from '@uiball/loaders'

export default function UnSelectFolder({ folder }) {
    const dispatch = useDispatch()
    const chat = useSelector(selectChat)
    const { loaderId, isActiveLoader } = useSelector(selectUi)

    function onAddFolderClick(e) {
        e.stopPropagation()

        if(isActiveLoader) {
            return
        }
        const chatsId = folder.chats.map(chat => chat.id)
        const updateFolder = {
            "id": folder.id,
            "title": folder.title,
            "iconTag": folder.iconTag,
            "chatIds": [...chatsId, chat.id]
        }
        dispatch(fetchUpdateKebabFolder(updateFolder))
    }

    return (
        <div
            className="chat-kebab__row chat-kebab__row_folders cursor-pointer"
            onClick={onAddFolderClick}>
            <div className="flex-container">
                {icons[folder.iconTag]}
                <p className="text-inter-16-400">{folder.title}</p>
            </div>
            <div
                className={isActiveLoader && loaderId === folder.id ? null : 'display-none'}>
                <DotSpinner
                    size={20}
                    speed={0.9}
                    color='var(--color-lavender-white)'
                />
            </div>

        </div>
    )
}

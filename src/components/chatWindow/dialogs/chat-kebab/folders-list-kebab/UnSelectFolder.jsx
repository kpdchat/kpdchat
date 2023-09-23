import React from "react";
import { icons } from "../../../../../extra/config/folder-icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectChat } from "../../../../../store/selectors";
import { fetchUpdateFolder } from "../../../../../store/actions/folderActions";

export default function UnSelectFolder({ folder }) {
    const dispatch = useDispatch()
    const chat = useSelector(selectChat)

    function onAddFolderClick() {
        const publicChatsId = folder.publicChats.map(chat => chat.id)
        const updateFolder = {
            "id": folder.id,
            "title": folder.title,
            "iconTag": folder.iconTag,
            "newChatIds": [...publicChatsId, chat.id]
        }
        dispatch(fetchUpdateFolder(updateFolder))
    }

    return (
        <div
            className="chat-kebab__row chat-kebab__row_folders cursor-pointer"
            onClick={onAddFolderClick}>
            <div className="flex-container">
                {icons[folder.iconTag]}
                <p className="text-inter-16-400">{folder.title}</p>
            </div>

        </div>
    )
}

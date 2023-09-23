import React from "react";
import { MdDone } from "react-icons/md";
import { icons } from "../../../../../extra/config/folder-icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectChat } from "../../../../../store/selectors";
import { fetchRemoveChatFromFolder } from "../../../../../store/actions/folderActions";

export default function SelectFolder({ folder }) {
    const dispatch = useDispatch()
    const chat = useSelector(selectChat)

    function onRemoveFolderClick() {
        const arrChatId = [chat.id]
        dispatch(fetchRemoveChatFromFolder(folder.id, arrChatId))
    }

    return (
        <div
            className="chat-kebab__row chat-kebab__row_folders cursor-pointer"
            onClick={onRemoveFolderClick}>
            <div className="flex-container">
                {icons[folder.iconTag]}
                <p className="text-inter-16-400">{folder.title}</p>
            </div>

            <MdDone color="#5750A8" size={24} />
        </div>
    )
}
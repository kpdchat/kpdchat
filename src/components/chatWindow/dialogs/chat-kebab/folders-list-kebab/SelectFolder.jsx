import React from "react";
import { MdDone } from "react-icons/md";
import { icons } from "../../../../../extra/config/folder-icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectChat, selectUi } from "../../../../../store/selectors";
import { fetchRemoveChatFromFolder } from "../../../../../store/actions/folderActions";
import { DotSpinner } from '@uiball/loaders'

export default function SelectFolder({ folder }) {
    const dispatch = useDispatch()
    const chat = useSelector(selectChat)
    const { loaderId, isActiveLoader } = useSelector(selectUi)

    function onRemoveFolderClick() {
        const arrChatId = [chat.id]
        if(isActiveLoader) {
            return
        }
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
            <div
                className={isActiveLoader && loaderId === folder.id ? null : 'display-none'}>
                <DotSpinner
                    size={20}
                    speed={0.9}
                    color="#5750A8"
                />
            </div>

            <MdDone
                color="#5750A8"
                size={24}
                className={isActiveLoader && loaderId === folder.id ? 'display-none' : null} />
        </div>
    )
}
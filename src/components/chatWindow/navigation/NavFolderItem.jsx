import React from "react";
import { icons } from "../../../extra/config/folder-icons";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import { useSelector, useDispatch } from "react-redux";
import { selectListName, selectUi, selectUser } from "../../../store/selectors";
import { setRenderList, setRenderListName } from "../../../store/actions/chatActions";
import FolderKebab from "./add-folder/FolderKebab";
import { useEffect } from "react";


export default function NavFolderItem({ folder }) {
    const type = 'onContext'
    const { isActiveFolderKebab } = useSelector(selectUi)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(folder.id, type)
    const user = useSelector(selectUser)
    const listName = useSelector(selectListName)
    const dispatch = useDispatch()

    function onContextClick() {
        onKebabClick()
    }

    function onFolderClick() {
        dispatch(setRenderListName(folder.id))
    }
    useEffect(() => {
        if (listName === folder.id) {
            dispatch(setRenderList(folder.publicChats))
        }
    }, [listName, user, dispatch, folder.id, folder.publicChats])
    return (
        <div
            className={listName === folder.id ? 'folders__folder folders__folder_active' : 'folders__folder'}>
            <div
                className={isActiveFolderKebab && isOpen && idKebab === folder.id ? 'folders__title cursor-pointer color-yellow' : 'folders__title cursor-pointer'}
                onClick={onFolderClick}
                onContextMenu={onContextClick}>
                {icons[folder.iconTag]}
                <h3 className='text-inter-16-400'>{folder.title}</h3>
            </div>
            <h3
                className={isActiveFolderKebab && isOpen && idKebab === folder.id ? 'text-inter-16-400 ml-5px color-yellow' : 'text-inter-16-400 ml-5px'}>
                {folder.publicChats.length}
            </h3>
            {isOpen && idKebab === folder.id && <FolderKebab folder={folder} />}
        </div>
    )
}

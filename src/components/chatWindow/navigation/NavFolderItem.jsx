import React from "react";
import { icons } from "../../../extra/config/folder-icons";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import { useSelector, useDispatch } from "react-redux";
import { selectUi } from "../../../store/selectors";
import { setRenderList } from "../../../store/actions/chatActions";
import AddFolderModal from "./add-folder/AddFolderModal";
import FolderDeleteModal from "./nav-modal/FolderDeleteModal";
import FolderKebab from "./add-folder/FolderKebab";


export default function NavFolderItem({ folder }) {
    const type = 'onContext'
    const { isActiveFolderKebab, isModal, modalId } = useSelector(selectUi)
    const { isOpen, idKebab, onKebabClick } = useKebabClick(folder.id, type)
    const dispatch = useDispatch()

    function onContextClick() {
        onKebabClick()
    }
    
    function onFolderClick() {
        const data = {
            list: folder.publicChats,
            name: 'folderChats'
        }
        dispatch(setRenderList(data))
    }
    return (
        <>
            <div className={isActiveFolderKebab && isOpen && idKebab === folder.id ? 'active-folder' : 'folders__folder'}>
                <div className="folders__title cursor-pointer" onClick={onFolderClick} onContextMenu={onContextClick}>
                    {icons[folder.iconTag]}
                    <h3 className='text-inter-16-400'>{folder.title}</h3>
                </div>
                <h3 className="text-inter-16-400 ml-5px">{folder.publicChats.length}</h3>
                {isOpen && idKebab === folder.id && <FolderKebab folder={folder} />}
                {isModal && modalId === 'delete-folder' && <FolderDeleteModal folder={folder} />}
            </div>

            {isModal && modalId === 'edit-folder' && <AddFolderModal />}
        </>
    )
}

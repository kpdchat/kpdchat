import React from "react";
import { icons } from "../../../extra/config/folder-icons";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import FolderKebab from "./add-folder/FolderKebab";
import { useSelector } from "react-redux";
import { selectUi } from "../../../store/selectors";
import FolderDeleteModal from "./nav-modal/FolderDeleteModal";
import AddFolderModal from "./add-folder/AddFolderModal";



export default function NavFolderItem({ folder }) {
    const type = 'onContext'
    const { isActive, isModal, modalId } = useSelector(selectUi)
    const { isOpen, id, onKebabClick } = useKebabClick(folder.id, type)

    function onContextClick() {
        onKebabClick()
    }
    return (
        <>
            <div className={isActive && isOpen && id === folder.id ? 'active-folder' : 'folders__folder'}>
                <div className="folders__title cursor-pointer" onContextMenu={onContextClick}>
                    {icons[folder.iconTag]}
                    <h3 className='text-inter-16-400'>{folder.title}</h3>
                </div>
                {isOpen && id === folder.id && <FolderKebab folder={folder} />}
            </div>
            {isModal && modalId === 'delete-folder' && <FolderDeleteModal folder={folder} />}
            {isModal && modalId === 'edit-folder' && <AddFolderModal />}
        </>
    )
}

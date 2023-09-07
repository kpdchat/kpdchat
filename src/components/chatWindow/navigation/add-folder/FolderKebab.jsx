import React, { useRef } from "react"
import KebabWrapper from "../../../../extra/KebabWrapper"
import { PiNotePencilFill, PiTrashBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../../store/actions/uiActions";

export default function FolderKebab({ folder }) {
    const dispatch = useDispatch()
    const menuRef = useRef()
    function onDeleteClick() {
        dispatch(setModalOpen(folder.id))
        
    }
    return (
        <KebabWrapper elRef={menuRef} >
            <div ref={menuRef} className="kebab-menu folder-kebab">
                <div className="folder-kebab__row cursor-pointer">
                    <PiNotePencilFill size={24} />
                    <p className="text-inter-16-400">Редагувати папку</p>
                </div>
                <div className="folder-kebab__row cursor-pointer mt-8px" onClick={onDeleteClick}>
                    <PiTrashBold size={24} />
                    <p className="text-inter-16-400">Видалити</p>
                </div>
            </div>
        </KebabWrapper>
    )
}
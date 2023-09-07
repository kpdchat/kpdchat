import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux'
import {setModalClose} from "../../../../store/actions/uiActions"
import { fetchDeleteFolder } from "../../../../store/actions/userActions";


export default function FolderDeleteModal({folder}) {
    const dispatch = useDispatch()

    function onCloseClick() {
        dispatch(setModalClose())
    }

    function onDeleteClick() {
        dispatch(fetchDeleteFolder(folder))
        dispatch(setModalClose())
    }

    return (
        <div className="modal-container folder-modal">
            <div className="folder-delete__content">
                <div className="folder-delete__header">
                    <MdClose size = {24} className = 'cursor-pointer' onClick={onCloseClick}/>
                </div>
                <p className= 'text-inter-18-400'>Ви остаточно хочете видалити дану папку?</p>
                <button onClick={onDeleteClick} className= 'text-inter-18-600 cursor-pointer'> Підтвердити </button>
            </div>
        </div>
    )
}

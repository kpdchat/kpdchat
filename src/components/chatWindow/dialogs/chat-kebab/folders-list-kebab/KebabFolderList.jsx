import React  from "react";
import { MdOutlineCreateNewFolder, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { selectFolderList, selectUser } from "../../../../../store/selectors";
import { setModalOpen } from "../../../../../store/actions/uiActions";
import SelectFolder from "./SelectFolder";
import UnSelectFolder from "./UnSelectFolder";

export default function KebabFolderList({ setOpen }) {
    const dispatch = useDispatch()
    const selectFolders = useSelector(selectFolderList)
    const user = useSelector(selectUser)

    function onAddFolderClick() {
        dispatch(setModalOpen('create-folder'))
    }
    
    return (
        <>
            <div className="chat-kebab__folders">
                <div
                    className="chat-kebab__row cursor-pointer"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <MdArrowBack size={24} />
                    <p className="text-inter-16-400">Повернутись</p>
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
                    <MdOutlineCreateNewFolder size={24} />
                    <p className="text-inter-16-400">Cтворити нову</p>
                </div>
            </div>
        </>
    )
}
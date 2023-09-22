import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form"
import { MdOutlineCreateNewFolder, MdArrowBack } from "react-icons/md";
import { icons } from "../../../../extra/config/folder-icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectFolderListKebab, selectUser } from "../../../../store/selectors";
import { setModalOpen } from "../../../../store/actions/uiActions";



export default function FolderListForm({ setOpen }) {
    const checkedFolders = useSelector(selectFolderListKebab)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const {
        register,
        handleSubmit,
        getValues,
        watch
    } = useForm({ defaultValues: checkedFolders, mode: "onSubmit" })

    console.log(watch());
    function onAddFolderClick() {
        dispatch(setModalOpen('create-folder'))
    }
    return (
        <>
            <div className="chat-kebab__folders">
                <div className="chat-kebab__row cursor-pointer"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <MdArrowBack className="chat-kebab__arrow" size={24} />
                    <p className="text-inter-16-400">Повернутись</p>

                </div>
                {user.folders.map(folder =>
                    <label
                        key={folder.id}
                        className="cursor-pointer">
                        <div className="flex-container">
                            {icons[folder.iconTag]}
                            <p className="text-inter-16-400">{folder.title}</p>
                        </div>

                        <input
                            {...register("folderId")}
                            value={folder.id}
                            type="checkbox" />
                    </label>

                )}
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
import React from "react";
import AddFolderModal from "./AddFolderModal";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { MdTrendingUp } from "react-icons/md";
// import { useSelector, useDispatch } from 'react-redux'
// import { selectModal } from "../../../../store/selectors";
// import { setModalOpen } from "../../../../store/actions/uiActions";


export default function AddFolder() {
    // const isModal = useSelector(selectModal)
    // const dispatch = useDispatch()
    const { t } = useTranslation()
    const [isModal, setIsModal] = useState(true)

    function onAddFolderClick() {
        setIsModal(true)
        // dispatch(setModalOpen())
    }
    return (
        <>
            <div className="add__item cursor-pointer" onClick={onAddFolderClick}>
                <AiOutlineFolderAdd size={24} />
                <h2 className="text-inter-18-600">{t('navigation.folder')}</h2>
            </div>
            {isModal && <AddFolderModal/>}
        </>

    )
}
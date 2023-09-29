import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/actions/uiActions";

export default function NavSettings() {
    const dispatch = useDispatch()

    function onSettingsClick() {
        dispatch(setModalOpen('settings'))
    }

    return (
        <MdOutlineSettings size={36} className="cursor-pointer" onClick={onSettingsClick} />
    )
}

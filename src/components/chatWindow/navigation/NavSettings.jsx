import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/actions/uiActions";

export default function NavSettings() {
    const dispatch = useDispatch();

    return (
        <>
            <MdOutlineSettings size={36} className="cursor-pointer" onClick={() => dispatch(setModalOpen('settings'))} />
        </>
    )
}

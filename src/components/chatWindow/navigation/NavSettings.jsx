import React from "react";
import { PiGear } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/actions/uiActions";

export default function NavSettings() {
    const dispatch = useDispatch();

    return (
        <>
            <PiGear size={36}
                className="cursor-pointer"
                onClick={() => dispatch(setModalOpen('settings'))} />
        </>
    )
}

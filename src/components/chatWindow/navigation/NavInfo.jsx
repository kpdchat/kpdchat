import React from "react";
import { MdInfoOutline } from "react-icons/md";
import {useDispatch} from 'react-redux';
import {setModalOpen} from '../../../store/actions/uiActions';

export default function NavInfo () {
    const dispatch = useDispatch();

    return (
        <>
            <MdInfoOutline size={36} className="cursor-pointer" onClick={() => dispatch(setModalOpen('info'))} />
        </>
    )
}

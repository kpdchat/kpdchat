import React from "react";
import { PiInfo } from "react-icons/pi";
import {useDispatch} from 'react-redux';
import {setModalOpen} from '../../../store/actions/uiActions';

export default function NavInfo () {
    const dispatch = useDispatch();

    return (
        <>
            <PiInfo 
            size={36} 
            className="cursor-pointer" 
            onClick={() => dispatch(setModalOpen('info'))} />
        </>
    )
}

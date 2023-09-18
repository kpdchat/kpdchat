import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setKebabClose } from "../store/actions/uiActions";

export default function KebabWrapper({ elRef, children }) {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(elRef.current);
        let handler = (e) => {
            if (!elRef.current?.contains(e.target)) {
                dispatch(setKebabClose())
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [elRef, dispatch])

    return (
        <>{children}</>
    )
}

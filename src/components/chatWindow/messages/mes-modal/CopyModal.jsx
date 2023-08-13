import React from "react"
import { useDispatch } from 'react-redux'
import { setKebabClose } from "../../../../store/actions/uiActions"

export default function CopyModal({ setCopy }) {
    const dispatch = useDispatch()

    function onCloseClick() {
        setCopy((prev) => !prev)
        dispatch(setKebabClose())
    }
    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="modal-container copy" onClick={onCloseClick}>
            <div className="copy__content" onClick={onContentClick}>
                <p className="text-18" >Файл скопійовано</p>
            </div>
        </div>
    )
}

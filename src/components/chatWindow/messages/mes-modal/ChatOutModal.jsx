import React from "react"
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { setKebabClose } from "../../../../store/actions/uiActions"

export default function ChatOutModal({ setOut }) {
    const dispatch = useDispatch()

    function onCloseClick() {
        setOut((prev) => !prev)
        dispatch(setKebabClose())
    }
    function onContentClick(e) {
        e.stopPropagation()
    }

    return (
        <div className="modal-container chat-out" onClick={onCloseClick}>
            <div className="chat-out__content" onClick={onContentClick}>
                <MdClose className="chat-out__close cursor-pointer" size={20}/>
                <p className="text-inter-18-400">Ви остаточно хочете вийти  з даного чату?</p>
                <button className="text-inter-18-600 cursor-pointer" onClick={onCloseClick}>Підтвердити</button>

            </div>
        </div>
    )
}

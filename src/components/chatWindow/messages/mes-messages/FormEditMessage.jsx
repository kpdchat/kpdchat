import React from "react";
import { MdClose } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { clearEditMessage } from "../../../../store/actions/messageAction";
export default function FormEditMessage({ editMessage }) {
    const dispatch =  useDispatch()
    const text = getText()

    function getText() {
        if (editMessage.text.length > 100) {
            return editMessage.text.slice(0, 100) + '...'
        }
        return editMessage.text
    }

    function onCloseClick() {
        dispatch(clearEditMessage())
    }
    return (
        <div className="input-mes__edit edit">
            <div className="edit__info">
                <PiNotePencil
                    size={24}
                    color='#38328A'
                />
                <div className="edit__text">
                    {/* <h2 className="text-inter-18-600">Кolay2</h2> */}
                    <p className="text-inter-16-400">
                        {text}
                    </p>
                </div>

            </div>
            <MdClose
                className="cursor-pointer"
                size={24}
                onClick={onCloseClick}
            />
        </div>
    )
}
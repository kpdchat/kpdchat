import React from "react";
import { useSelector } from "react-redux";
import { selectDataForMessages } from "../../../store/selectors";

export default function MessageTitle() {
    const { chat } = useSelector(selectDataForMessages)
    return (
        <div className="messages__dialog-name">
            <img src={chat?.chatPictureLink
            } alt="" />
            <div className="messages__dialog-info">
                <h3 className='text-inter-18-600'>{chat?.title}</h3>
                <p className='text-inter-14-400'> {chat?.members?.length ? chat?.members?.length : 0} учасників</p>
            </div>
        </div>
    )
}

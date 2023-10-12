import React from "react";
import { useSelector } from "react-redux";
import { selectDataForMessages } from "../../../store/selectors";
import JoinModalCounter from './mes-modal/JoinModalCounter';

export default function MessageTitle() {
    const { chat } = useSelector(selectDataForMessages);
    const members = chat?.members?.length;

    return (
        <div className="messages__dialog-name">
            <img src={chat?.chatPictureLink
            } alt="" />
            <div className="messages__dialog-info">
                <h3 className='text-inter-18-600'>{chat?.title}</h3>
                <JoinModalCounter members={members}/>
            </div>
        </div>
    )
}

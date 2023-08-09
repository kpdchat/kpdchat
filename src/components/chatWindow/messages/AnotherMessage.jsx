import React, { useState } from "react";
import user_photo from '../../../images/chat-window/user-photo.png'
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import MesAnotherKebab from "./mes-kebab/MesAnotherKebab";


export default function AnotherMessage() {
    const [open, setOpen] = useState(false);

    function onKebabClick(e) {
        e.stopPropagation()
        setOpen(!open)
    }

    return (
        <div className="window-mes__another">
            <div className="another__title">
                <img className='chat-img' src={user_photo} alt="" />
                <h3 className='title-h3'>Evgenia@_87</h3>
            </div>
            <div className="another__message">
                <div className="another__text">
                    <p className='text-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo!</p>
                    <span className='time-mes'>12:28</span>
                </div>
                <div className="another__kebab">
                    {open && <MesAnotherKebab setOpen={setOpen} />}
                    <img className="cursor-pointer " src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                </div>
            </div>


        </div>
    )
}
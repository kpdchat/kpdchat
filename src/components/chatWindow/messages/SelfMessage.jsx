import React, { useState } from "react";
import user_photo from '../../../images/chat-window/user-photo.png'
import menu_kebab from "../../../images/chat-window/menu-kebab.png"
import MesSelfKebab from "./mes-kebab/MesSelfKebab";


export default function SelfMessage() {
    const [open, setOpen] = useState(false);
    function onKebabClick(e) {
        e.stopPropagation()
        setOpen(!open)
    }
    return (
        <div className="window-mes__self self">
            <div className="self__title">
                <h3 className='title-h3'>Evgenia@_87</h3>
                <img className='chat-img' src={user_photo} alt="" />
            </div>
            <div className="self__message" >
                <div className="self__kebab">
                    {open && <MesSelfKebab setOpen={setOpen} />}
                    <img className="cursor-pointer " src={menu_kebab} alt="" onMouseDown={onKebabClick} />
                </div>

                <div className="self__text">
                    <p className='text-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum a possimus, voluptate magni, eaque odio culpa harum neque, eos commodi laudantium dignissimos labore quas! Cum dolor ut saepe nisi dicta pariatur officia error est vitae nulla. Iste nostrum expeditficiis perferendis suscipit earum! Ullam inventore earum repudiandae obcaecati culpa voluptatibus harum dolorem? Possimus fuga qui aperiam ipsam tenetur quos, laudantium ipsa.</p>
                    <span className='time-mes'>12:28</span>

                </div>
            </div>
        </div>
    )
}
import React from "react";
import { MdOutlineGroupAdd } from "react-icons/md";

export default function AddChat() {
    return (
        <div className="add__item cursor-pointer">
            <MdOutlineGroupAdd size={24}/>
            <h2 className="text-inter-18-600">Чат</h2>
        </div>
    )
}
import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";

export default function AddFolder() {
    return (
        <div className="add__item">
            <AiOutlineFolderAdd className="cursor-pointer" size={24}/>
            <h2 className="text-inter-18-600 cursor-pointer">Папка</h2>
        </div>
    )
}
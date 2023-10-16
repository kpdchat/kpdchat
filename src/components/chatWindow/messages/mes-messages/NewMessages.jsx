import React from "react";

export default function NewMessages({ newRef }) {
    return (
        <div ref={newRef} className="window-mes__new-mess">
            <span className="text-inter-16-400">Непрочитанні</span>
        </div>
    )
}
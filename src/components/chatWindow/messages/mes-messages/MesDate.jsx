import React from "react";

export default function MesDate({ date }) {
    // console.log(date);
    const event = new Date(date);
    const options = { weekday: 'long',  month: 'long', day: 'numeric' };
    const messageDate = event.toLocaleDateString('uk-UA', options)
    return (
        <div className="window-mes__data text-inter-16-400">
           {messageDate}
        </div>
    )
}

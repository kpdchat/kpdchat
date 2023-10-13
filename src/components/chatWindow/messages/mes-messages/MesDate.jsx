import React from "react";
import { locales } from "../../../../extra/config/vocabulary/date-locales";
export default function MesDate({ date }) {
    const locale = localStorage.getItem('i18nextLng')
    
    const event = new Date(date);
    const options = { month: 'long', day: 'numeric' };
    const messageDate = event.toLocaleDateString(locales[locale], options)

    return (
        <div className="window-mes__data text-inter-16-400">
            {messageDate}
        </div>
    )
}

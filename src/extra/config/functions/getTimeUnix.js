import { locales } from "../vocabulary/date-locales"

export function getTimeUnix(timeUnix) {
    const locale = localStorage.getItem('i18nextLng')

    const date = new Date(timeUnix * 1000)
    let minutes = date.getMinutes()

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    let messageDate = date.toLocaleTimeString(locales[locale], { hour: "2-digit", minute: "2-digit" })
    const today = new Date()
    const diffDays = Math.floor((date - today) / (1000 * 60 * 60 * 24))

    if (today.toLocaleDateString() !== date.toLocaleDateString()) {
        messageDate = date.toLocaleDateString(locales[locale],
            { weekday: 'short', })
    } else if (diffDays > 6) {
        messageDate = date.toLocaleDateString(locales[locale],
            { month: 'short', day: 'numeric' })
    }
    return messageDate
}


import { locales } from "../vocabulary/date-locales"

export function getDateTine(time) {
    const locale = localStorage.getItem('i18nextLng')

    const date = new Date(time)
    
    //ill return this code if our team don`t like time localization in messages

    // let minutes = date.getMinutes()
    // if (minutes < 10) {
    //     minutes = '0' + minutes
    // }
    let messageDate = date.toLocaleTimeString(locales[locale], { hour: "2-digit", minute: "2-digit" })

    return messageDate
}

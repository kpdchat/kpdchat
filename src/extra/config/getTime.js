export function getMessageTime(timeUnix) {
    const date = new Date(timeUnix * 1000)
    let minutes = date.getMinutes()
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    let messageDate = date.getHours() + ':' + minutes
    const today = new Date().toLocaleDateString()
    if (today !== date.toLocaleDateString()) {
        messageDate = date.toLocaleDateString('uk-UA', { weekday: 'short', })
    }
    return messageDate
}

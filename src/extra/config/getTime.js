export function getMessageTime(timeUnix) {
    const date = new Date(timeUnix * 1000)
    let messageDate = date.getHours() + ':' + date.getMinutes()
    const today = new Date().toLocaleDateString()
    if (today !== date.toLocaleDateString()) {
        messageDate = date.toLocaleDateString('uk-UA', { weekday: 'short', })
    }
    return messageDate
}

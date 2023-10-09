export function getDateTine(time) {
    const date = new Date(time)
    let minutes = date.getMinutes()
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    let messageDate = date.getHours() + ':' + minutes

    return messageDate
}

export function getStyleKebab(list, index, e) {
    let left = e.pageX - 192
    if (left < 0) {
        left = 2
    }
    if (window.innerWidth > 1250 && left > 142) {
        left = 142
    } else if (window.innerWidth < 1250 && left > 50) {
        left = 40
    }
    let top
    if (list.length >= 6 && list.length < (index + 2)) {
        top = '-10px'
    } else {
        top = '60px'
    }

    return {
        position: 'absolute',
        left: left + 'px',
        top: top,
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: '2',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 4px 0px #bdbae0',
        borderRadius: '8px',
        padding: '8px',
    }
}
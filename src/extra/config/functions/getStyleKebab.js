export function getStyleKebab(list, index, e) {
    let left = e.pageX - 192;

    if (left < 0) {
        left = 2;
    }

    if (window.innerWidth > 1250 && left > 132) {
        left = 132;
    } else if (window.innerWidth < 1250 && left > 40) {
        left = 30;
    }

    let top;

    if (list.length >= 6 && list.length < (index + 4)) {
        top = '-10px';
    } else {
        top = '60px';
    }

    const getTheme = document.documentElement.getAttribute('data-theme');
    let backColor;

    if (getTheme === 'light') {
        backColor = '#FFF';
    } else {
        backColor = '#1B1F23';
    }

    let boxShadowChange;

    if (getTheme === 'light') {
        boxShadowChange = '1px 1px 4px 0 #706C9F';
    } else {
        boxShadowChange = '2px 2px 5px 0 #08080C';
    }

    return {
        left: left + 'px',
        top: top,
        backgroundColor: backColor,
        boxShadow: boxShadowChange,
    }
}

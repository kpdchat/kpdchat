import { useSelector, useDispatch } from 'react-redux'
import { selectUi } from "../../store/selectors"
import { setKebabClose, setKebabOpen } from "../../store/actions/uiActions"

export function useKebabClick(id, kebabName, type = '') {
    const { isOpen, idKebab } = useSelector(selectUi)
    const dispatch = useDispatch()
    function onKebabClick(e) {
        if (!type) {
            e.stopPropagation()
        }

        if (!isOpen) {
            dispatch(setKebabOpen(`${kebabName}${id}`))
        } else if (id === idKebab) {
            dispatch(setKebabClose())
        } else {
            dispatch(setKebabOpen(`${kebabName}${id}`))
        }
    }

    return {
        isOpen,
        idKebab,
        onKebabClick,
    }
}

import { useSelector, useDispatch } from 'react-redux'
import { selectUi } from "../../store/selectors"
import { setKebabClose, setKebabOpen } from "../../store/actions/uiActions"

export function useKebabClick(messageId, type = undefined) {
    const { isOpen, idKebab } = useSelector(selectUi)
    const dispatch = useDispatch()

    function onKebabClick(e) {
        if (!type) {
            e.stopPropagation()
        }

        if (!isOpen) {
            dispatch(setKebabOpen(messageId))
        } else if (messageId === idKebab) {
            dispatch(setKebabClose())
        } else {
            dispatch(setKebabOpen(messageId))
        }
    }

    return {
        isOpen,
        idKebab,
        onKebabClick,
    }
}

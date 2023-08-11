import { useSelector, useDispatch } from 'react-redux'
import { selectUi } from "../../store/selectors"
import { setKebabClose, setKebabOpen } from "../../store/actions/uiActions"

export function useKebabClick(messageId) {
    const { isOpen, id } = useSelector(selectUi)
    const dispatch = useDispatch()

    function onKebabClick(e) {
        e.stopPropagation()
        if (!isOpen) {
            dispatch(setKebabOpen(messageId))
        } else if (messageId === id){
            dispatch(setKebabClose())
        } else {
            dispatch(setKebabOpen(messageId))
        }
    }

    return {
        isOpen, 
        id,
        onKebabClick
    }
}

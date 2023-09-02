import {useContext, useState} from 'react';
import {Context} from '../../../../context/Context';

export default function useLoginAndRegistrationLogic() {
    const [uniKey, setUniKey] = useState('');
    const [uniKeyError, setUniKeyError] = useState('')
    const [modal, setModal] = useState(false)
    const {setIsActive} = useContext(Context);

    function uniKeyValidate(value) {
        if (!value) {
            setUniKeyError('Це поле обов\'язкове для заповнення')
        } else {
            setUniKeyError('')
        }
    }

    function onChangeUniqueKey(e) {
        setUniKey(e.target.value)
        uniKeyValidate(e.target.value)
    }

    function onDisplay() {
        setIsActive(true);
    }

    return {
        uniKey,
        uniKeyError,
        modal,
        setModal,
        onChangeUniqueKey,
        onDisplay,
    }
}

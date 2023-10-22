import React, { useRef, useState } from "react";
import KebabWrapper from "../../../../extra/KebabWrapper";
import { PiShareFat, PiCopy, PiTrash, PiNotePencil } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
// import { selectUser } from '../../../../store/selectors/index';
import {clearEditMessage, clearReplyMessage, setEditMessage, setReplyMessage} from '../../../../store/actions/messageAction';
import { setKebabClose } from "../../../../store/actions/uiActions";

export default function MesSelfKebab({ message, style }) {
    // const user = useSelector(selectUser);
    const [copy, setCopy] = useState(false);
    const [copyStyle, setCopyStyle] = useState({});
    const dispatch = useDispatch();
    const menuRef = useRef();
    const { t } = useTranslation();

    function onReplyClick() {
        dispatch(clearEditMessage());
        dispatch(setReplyMessage(message));
        dispatch(setKebabClose());
    }

    function onDeleteClick() {
        //это мне нада

        // const data = {
        //     "messageId": message.id,
        //     "userId": user.id
        // }
        // dispatch(fetchDeleteMessage(data));
        // dispatch(fetchDeleteMessage(message.id, user.id));
    }

    function onEditClick() {
        dispatch(clearReplyMessage());
        dispatch(setEditMessage(message));
        dispatch(setKebabClose());
    }

    function onCopyClick() {
        if (style.top) {
            setCopyStyle({ top: '5px', });
        } else {
            setCopyStyle({ top: '100px', });
        }
        setCopy(true);
        navigator.clipboard.writeText(message.text);
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    return (
        <KebabWrapper elRef={ menuRef }>
            <div
                ref={ menuRef }
                style={ style }
                className='kebab-menu self-kebab no-select'>
                <div onClick={ onReplyClick } className='self-kebab__row cursor-pointer'>
                    <PiShareFat size={ 20 } />
                    <p className='text-inter-16-400'>{ t('global.answer') }</p>
                </div>
                <div onClick={ onDeleteClick } className='self-kebab__row cursor-pointer'>
                    <PiTrash size={ 20 } />
                    <p className='text-inter-16-400'>{ t('global.delete') }</p>
                </div>
                <div onClick={ onEditClick } className='self-kebab__row cursor-pointer'>
                    <PiNotePencil size={ 20 } />
                    <p className='text-inter-16-400'>{ t('global.edit') }</p>
                </div>
                <div onClick={ onCopyClick } className='self-kebab__row cursor-pointer'>
                    <PiCopy size={ 20 } />
                    <p className='text-inter-16-400'>{ t('global.copy') }</p>
                </div>
            </div>
            { copy && <div style={ copyStyle } className='self-kebab__copy'>
                <p className='text-inter-16-400'>{ t('global.copied-message') }</p>
            </div> }
        </KebabWrapper>
    )
}

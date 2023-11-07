import React, { useState } from 'react';
import MessageTitleKebab from "./mes-kebab/MessageTitleKebab";
import { MdOutlineMoreVert } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useKebabClick } from "../../../extra/hooks/useKebabClick"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataForMessages } from '../../../store/selectors';
import { clearInputSearch, fetchMessagesSearch, stopClearInputSearch } from '../../../store/actions/messageAction';

export default function MessageSearch() {
    const [textSearch, setTextSearch] = useState('');
    const [textSearchError, setTextSearchError] = useState('');
    const dispatch = useDispatch();
    const { chat } = useSelector(selectDataForMessages);
    const titleId = '-1';
    const { isOpen, idKebab, onKebabClick } = useKebabClick(titleId);
    const { t } = useTranslation();

    // Data for Submit to Server
    const searchData = {
        chatId: chat.id,
        text: textSearch
    }

    // Validation Search Input
    function searchValidate(value) {
        if (!value) {
            dispatch(stopClearInputSearch());
            setTextSearchError('');
        } else if (value.length < 3 ) {
            dispatch(clearInputSearch());
            setTextSearchError('global.searchLength');
        } else {
            dispatch(clearInputSearch());
            setTextSearchError('');
            dispatch(fetchMessagesSearch(searchData));
        }
    }

    // Submit messages for Search
    async function onChangeTextSearch(e) {
        const value = e.target.value;
        setTextSearch(value);
        searchValidate(value);
    }

    // Enter in Chat when you press 'ENTER'
    function onEnterPressSearchMess(e) {
        if (e.keyCode === 13 && !e.shiftKey && !e.ctrlKey) {
            e.preventDefault();
        }
    }

    return (
        <div className="messages__search">
            <div className='input-container'>
                <div className="input-content">
                    <input
                        type="text"
                        name="text"
                        value={ textSearch }
                        onChange={ onChangeTextSearch }
                        onBlur={ onChangeTextSearch }
                        onKeyDown={ onEnterPressSearchMess }
                        className="input text-inter-16-400"
                        placeholder={t('global.search')} />
                    <PiMagnifyingGlass className="input-icon" />
                </div>

                { textSearchError &&
                    <p className='search__error-message'>{ t(textSearchError) }</p>
                }
            </div>

            <div className="messages__info" >
                <MdOutlineMoreVert
                    size={20}
                    className="cursor-pointer"
                    onMouseDown={onKebabClick} />
                {isOpen && idKebab === titleId && <MessageTitleKebab />}
            </div>
        </div>
    )
}

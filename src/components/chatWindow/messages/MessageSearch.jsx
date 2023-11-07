import React, { useEffect, useState } from 'react';
import MessageTitleKebab from "./mes-kebab/MessageTitleKebab";
import { MdOutlineMoreVert } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useKebabClick } from "../../../extra/hooks/useKebabClick"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectClearSearch, selectDataForMessages } from '../../../store/selectors';
import { fetchMessagesSearch, stopClearInputSearch, stopSearch } from '../../../store/actions/messageAction';

export default function MessageSearch() {
    const [textSearch, setTextSearch] = useState('');
    const [textSearchError, setTextSearchError] = useState('');
    const isClearSearch = useSelector(selectClearSearch);
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
            setTextSearchError('');
        } else if (value.length < 3) {
            setTextSearchError('global.searchLength');
        } else {
            setTextSearchError('');
        }
    }

    // Change Text in InputSearch
    function onChangeTextSearch(e) {
        const value = e.target.value;
        setTextSearch(value);
        searchValidate(value);
    }

    // Submit messages for Search
    function onSearchSubmit(e) {
        e.preventDefault();
        if (textSearch.length >= 3) {
            dispatch(fetchMessagesSearch(searchData));
        }
    }

    useEffect(() => {
        if (isClearSearch) {
            setTextSearch('');
            dispatch(stopClearInputSearch());
        }
    }, [isClearSearch, dispatch]);

    useEffect(() => {
        if (!textSearch || textSearch.length < 3) {
            dispatch(stopSearch())
        }
    }, [dispatch, textSearch])

    return (
        <div className='messages__search'>
            <div className='input-container'>
                <form className='input-content' onSubmit={ onSearchSubmit }>
                    <input
                        type='text'
                        name='text'
                        autoComplete='off'
                        value={ textSearch }
                        onChange={ onChangeTextSearch }
                        onBlur={ onChangeTextSearch }
                        className='input text-inter-16-400'
                        placeholder={ t('global.search') } />
                    <PiMagnifyingGlass className='input-icon' />
                </form>

                { textSearchError &&
                    <p className='search__error-message'>{ t(textSearchError) }</p>
                }
            </div>

            <div className='messages__info'>
                <MdOutlineMoreVert
                    size={ 20 }
                    className='cursor-pointer'
                    onMouseDown={ onKebabClick } />
                { isOpen && idKebab === titleId && <MessageTitleKebab /> }
            </div>
        </div>
    )
}

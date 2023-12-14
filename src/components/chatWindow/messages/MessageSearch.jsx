import React, { useEffect, useState } from 'react';
import MessageTitleKebab from "./mes-kebab/MessageTitleKebab";
import { MdOutlineMoreVert, MdOutlineClose } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useKebabClick } from "../../../extra/hooks/useKebabClick"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectClearSearch, selectDataForMessages } from '../../../store/selectors';
import { fetchMessagesSearch, stopClearInputSearch, stopSearch } from '../../../store/actions/messageAction';

export default function MessageSearch() {
    const [text, setText] = useState({
        textSearch: '',
        prevTextSearch: ''
    });
    const [isSearch, setIsSearch] = useState(false)

    const isClearSearch = useSelector(selectClearSearch);
    const dispatch = useDispatch();
    const { chat } = useSelector(selectDataForMessages);
    const titleId = '-1';
    const { isOpen, idKebab, onKebabClick } = useKebabClick(titleId);
    const { t } = useTranslation();

    // Data for Submit to Server
    const searchData = {
        chatId: chat.id,
        text: text.textSearch
    }

    // Change Text in InputSearch
    function onChangeTextSearch(e) {
        const value = e.target.value;
        setText({ ...text, textSearch: value });
    }

    // Submit messages for Search
    function onSearchSubmit(e) {
        e.preventDefault();
        setText({ ...text, prevTextSearch: text.textSearch });
        dispatch(fetchMessagesSearch(searchData));
    }

    function onSearchClick() {
        setIsSearch(!isSearch)
    }

    useEffect(() => {
        if (isClearSearch) {
            setText({ ...text, textSearch: '' });
            dispatch(stopClearInputSearch());
            setIsSearch(false)
        }
    }, [isClearSearch, dispatch, text]);

    useEffect(() => {
        if (!text.textSearch || text.prevTextSearch.length > text.textSearch.length) {
            dispatch(stopSearch());
        }
    }, [dispatch, text.prevTextSearch.length, text.textSearch])

    return (
        <div className='messages__search'>
            <div className={isSearch ? 'input-container active-search' : 'input-container'}>
                <form className='input-content' onSubmit={onSearchSubmit}>
                    <PiMagnifyingGlass
                        className='input-icon'
                        onClick={onSearchClick} />
                    <input
                        type='text'
                        name='text'
                        autoComplete='off'
                        value={text.textSearch}
                        onChange={onChangeTextSearch}
                        onBlur={onChangeTextSearch}
                        className='input text-inter-16-400'
                        placeholder={t('global.search')} />

                </form>
                <MdOutlineClose
                    className='icon-close cursor-pointer'
                    onClick={onSearchClick} />
            </div>

            <div className='messages__info'>
                <MdOutlineMoreVert
                    size={22}
                    className='cursor-pointer'
                    onMouseDown={onKebabClick}
                    onClick={() => setIsSearch(false)} />
                {isOpen && idKebab === titleId && <MessageTitleKebab />}
            </div>
        </div>
    )
}

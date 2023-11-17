import React, { useState, useEffect } from "react";
import { icons } from "../../../extra/config/vocabulary/folder-icons";
import { useKebabClick } from "../../../extra/hooks/useKebabClick";
import { useSelector, useDispatch } from "react-redux";
import { selectListName, selectUser } from "../../../store/selectors";
import { setRenderList, setRenderListName } from "../../../store/actions/chatActions";
import FolderKebab from "./add-folder/FolderKebab";

export default function NavFolderItem({ folder }) {
    const type = 'onContext'
    const { isOpen, idKebab, onKebabClick } = useKebabClick(folder.id, 'folder', type)
    const user = useSelector(selectUser)
    const listName = useSelector(selectListName)
    const dispatch = useDispatch()
    const [style, setStyle] = useState({})
    const [hover, setHover] = useState({
        width: false,
        over: false,
    })

    function onContextClick(e) {
        setHover({ ...hover, over: false })
        onKebabClick()
        setStyle({ top: ` ${e.pageY + 7}px`, })
    }

    function onFolderClick() {
        dispatch(setRenderListName('folder' + folder.id))
    }

    function onMouseOver(e) {
        setHover({ ...hover, over: true })
        setStyle({ top: `${e.pageY + 7}px`, })
    }

    useEffect(() => {
        if (listName === 'folder' + folder.id) {
            dispatch(setRenderList(folder.chats))
        }
    }, [listName, user, dispatch, folder.id, folder.chats])

    useEffect(() => {
        if (window.innerWidth < 1025) {
            setHover({ ...hover, width: true })
        } else {
            setHover({ ...hover, width: false })
        }
        // eslint-disable-next-line
    }, [window.innerWidth])

    return (
        <div
            className={listName === 'folder' + folder.id ? 'folders__folder folders__folder_active' : 'folders__folder'}>
            <div
                className='folders__title cursor-pointer'
                onClick={onFolderClick}
                onContextMenu={onContextClick}
                onMouseOver={onMouseOver}
                onMouseLeave={() => setHover({ ...hover, over: false })}>

                {icons[folder.iconTag]}
                <h3 className='text-inter-16-400'>{folder.title}</h3>
                {hover.over && hover.width &&
                    <div style={style} className="folder-hover">
                        {folder.title}
                    </div>}
            </div>
            <h3
                className='text-inter-16-400 ml-5px'>
                {folder.chats.length}
            </h3>
            {isOpen && idKebab === 'folder' + folder.id && <FolderKebab folder={folder} style={style} />}
        </div >
    )
}

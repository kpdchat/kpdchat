import { createSelector } from 'reselect'


export const selectEditFolder = state => state.folder.editFolder
export const selectDeleteFolder = state => state.folder.deleteFolder

export const selectUser = state => state.user.user
export const selectUserError =  state => state.user.userError

export const selectUi = state => state.ui
export const selectOpenChat = state => state.ui.isOpenChat
export const selectLoader = state => state.ui.isActiveLoader

export const selectRenderChatList = state => state.chat.renderList
export const selectListName = state => state.chat.listName
export const selectLeaveChat = state => state.chat.leaveChat
export const selectJoinChat = state => state.chat.joinChat
export const selectChat = state => state.chat.selectChat

export const selectIsWindowStart = state => state.message.isStartWindow


export const selectEditFolderForForm = createSelector(
    selectEditFolder,
    (editFolder) => {
        const chatIds = editFolder?.publicChats?.reduce((list, chat) => {
            list.push('' + chat.id)
            return list
        }, [])
        return {
            'id': editFolder.id,
            'title': editFolder.title,
            'iconTag': editFolder.iconTag,
            'chatIds': chatIds,
        }
    }
)

export const selectFolderList = createSelector(
    selectUser,
    selectChat,
    (user, chat) => {
        const folderList = user.folders.reduce((list, folder) => {
            if (folder.publicChats.find(publicChat => publicChat.id === chat.id)) {
                list.push(folder.id)
            }
            return list
        }, [])
        return folderList
    }
)

export const selectFolderToDeleteFrom = createSelector(
    selectUser,
    selectListName,
    selectChat,
    (user, listName, chat) => {
        const folderId = listName.substr(6)
        const folder = user.folders.find(folder => {
            return folder.id === Number(folderId)
        })
        const publicChatsId = folder.publicChats
            .map(el => el.id)
            .filter(el => el !== chat.id)

        const updateFolder = {
            "id": folder.id,
            "title": folder.title,
            "iconTag": folder.iconTag,
            "chatIds": publicChatsId
        }
        return updateFolder
    }
)


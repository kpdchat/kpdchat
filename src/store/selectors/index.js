import { createSelector } from 'reselect'

export const selectUi = state => state.ui
export const selectModal = state => state.ui.isModal
export const selectEditFolder = state => state.folder.editFolder
export const selectDeleteFolder = state => state.folder.deleteFolder
export const selectUser = state => state.user.user
export const selectOpenChat = state => state.ui.isOpenChat
export const selectLoader = state => state.ui.isActiveLoader
export const selectRenderChatList = state => state.chat.renderList
export const selectListName = state => state.chat.listName
export const selectLeaveChat = state => state.chat.leaveChat
export const selectJoinChat = state => state.chat.joinChat
export const selectChat = state => state.chat.selectChat


export const selectEditFolderForForm = createSelector(
    selectEditFolder,
    (editFolder) => {
        const publicChatIds = editFolder?.publicChats?.reduce((list, chat) => {
            list.push(chat.id)
            return list
        }, [])
        return {
            'id': editFolder.id,
            'title': editFolder.title,
            'iconTag': editFolder.iconTag,
            'publicChatIds': publicChatIds,
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


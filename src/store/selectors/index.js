import { createSelector } from 'reselect'

export const selectUi = state => state.ui
export const selectModal = state => state.ui.isModal
export const selectEditFolder = state => state.folder.editFolder
export const selectDeleteFolder = state => state.folder.deleteFolder
export const selectUser = state => state.user.user
export const selectRenderChatList = state => state.chat.renderList
export const selectListName = state => state.chat.listName
export const selectLeaveChat = state => state.chat.leaveChat


export const selectEditFolderForForm = createSelector(
    selectEditFolder, 
    (editFolder) => {
        const publicChatIds = editFolder?.publicChats?.reduce((list, chat) => {
            list.push(chat.id)
            return list
        }, [])
        return {
            'id' : editFolder.id,
            'title': editFolder.title,
            'iconTag': editFolder.iconTag,
            'publicChatIds': publicChatIds,
        }
    }
)



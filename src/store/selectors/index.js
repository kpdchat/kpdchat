import { createSelector } from 'reselect'


export const selectEditFolder = state => state.folder.editFolder
export const selectDeleteFolder = state => state.folder.deleteFolder

export const selectUser = state => state.user.user
export const selectUserError = state => state.user.userError

export const selectUi = state => state.ui
export const selectOpenChat = state => state.ui.isOpenChat
export const selectLoader = state => state.ui.isActiveLoader

export const selectRenderChatList = state => state.chat.renderList
export const selectListName = state => state.chat.listName
export const selectLeaveChat = state => state.chat.leaveChat
export const selectJoinChat = state => state.chat.joinChat
export const selectChat = state => state.chat.selectChat

export const selectIsWindowStart = state => state.message.isStartWindow
export const selectRenderChatId = state => state.message.chatId
export const selectRenderChat = state => state.message.renderChat


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

export const selectDataForMessages = createSelector(
    selectUser,
    selectRenderChatId,
    selectRenderChat,
    (user, id, chat) => {
        return {
            user,
            id,
            chat
        }
    }
)

// export const selectFilterByDateMessageList = createSelector(
//     selectUser,
//     selectRenderChat,
//     (user, chat) => {
//         const sortMessages = chat.messages.sort((a, b) => {
//             return new Date(b.date * 1000) - new Date(a.date * 1000);
//         }).map()
//         let messageWithDay = []
//         for (let i = 0; i < sortMessages.length; i++) {

//             if()
//         }
//     }
// )
// "messages": [
//     {
//         "id": 4,
//         "userProfile": {
//             "id": 1,
//             "nickname": "bobr",
//             "profilePictureLink": "https://www.tapeciarnia.pl/tapety/normalne/194360_bobr.jpg"
//         },
//         "text": "string",
//         "sentAt": 1696696521,
//         "repliedToMessage": null
//     },
//     {
//         "id": 6,
//         "userProfile": {
//             "id": 6,
//             "nickname": "LolliPop7",
//             "profilePictureLink": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
//         },
//         "text": "test",
//         "sentAt": 1696771213,
//         "repliedToMessage": null
//     },
//     {
//         "id": 10,
//         "userProfile": {
//             "id": 10,
//             "nickname": "Olya",
//             "profilePictureLink": "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
//         },
//         "text": "ооооооо",
//         "sentAt": 1696784616,
//         "repliedToMessage": null
//     },
//     {
//         "id": 11,
//         "userProfile": {
//             "id": 6,
//             "nickname": "LolliPop7",
//             "profilePictureLink": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
//         },
//         "text": "hohoho",
//         "sentAt": 1696785190,
//         "repliedToMessage": null
//     }
// ]
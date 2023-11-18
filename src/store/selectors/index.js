import { createSelector } from 'reselect'

export const selectEditFolder = state => state.folder.editFolder
export const selectDeleteFolder = state => state.folder.deleteFolder

export const selectUser = state => state.user.user
export const selectUserError = state => state.user.userError

export const selectUi = state => state.ui
export const selectOpenChat = state => state.ui.isOpenChat
export const selectLoader = state => state.ui.isActiveLoader
export const selectMessagesLoader = state => state.ui.isActiveMessagesLoader

export const selectRenderChatList = state => state.chat.renderList
export const selectListName = state => state.chat.listName
export const selectLeaveChat = state => state.chat.leaveChat
export const selectJoinChat = state => state.chat.joinChat
export const selectChat = state => state.chat.selectChat

export const selectIsWindowStart = state => state.message.isStartWindow
export const selectRenderChatId = state => state.message.chatId
export const selectRenderChat = state => state.message.renderChat
export const selectEditMessage = state => state.message.editMessage
export const selectClearForm = state => state.message.clearForm
export const selectReplyMessage = state => state.message.replyMessage
export const selectDeleteMessage = state => state.message.deleteMessage
export const selectUnSeenCount = state => state.message.unSeenCount
export const selectChatLength = state => state.message.chatLength
export const selectClearSearch = state => state.message.clearInputSearch
export const selectRenderMessages = state => state.message.renderMessages
export const selectIsSearch = state => state.message.isSearch

export const selectEditFolderForForm = createSelector(
    selectEditFolder,
    (editFolder) => {
        const chatIds = editFolder?.chats?.reduce((list, chat) => {
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
            if (folder.chats.find(publicChat => publicChat.id === chat.id)) {
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
        const chatsId = folder.chats
            .map(el => el.id)
            .filter(el => el !== chat.id)

        const updateFolder = {
            "id": folder.id,
            "title": folder.title,
            "iconTag": folder.iconTag,
            "chatIds": chatsId
        }
        return updateFolder
    }
)

export const selectSortRenderList = createSelector(
    selectRenderChatList,
    selectUser,
    (list, user) => {
        const sortArrByDate = list
            .filter(el => el.messages && el.messages?.length)
            .sort((a, b) => {
                return new Date(b.messages[0].sentAt * 1000) - new Date(a.messages[0].sentAt * 1000)
            }).map(chat => {
                const status = user.chatStatuses.find(el => el.chatId === chat.id)
                if (status) {
                    let unseenMessageCount = status.unseenMessageCount
                    if (chat.messages[0].userProfile?.id === user.id) {
                        unseenMessageCount = 0
                    }
                    chat = {
                        ...chat,
                        "unseenMessageCount": unseenMessageCount
                    }
                }
                return chat
            })

        const noLastMessageArr = list
            .filter(el => !el.messages?.length).sort((a, b) => {
                return a.id - b.id
            })

        let sortList = sortArrByDate.concat(noLastMessageArr)
        return sortList
    }
)

export const selectDataForMessages = createSelector(
    selectUser,
    selectRenderChatId,
    selectRenderChat,
    selectChatLength,
    (user, id, chat, messLength) => {
        return {
            user,
            id,
            chat,
            messLength
        }
    }
)

export const selectFilterByDateMessageList = createSelector(
    selectRenderChat,
    selectUser,
    selectRenderMessages,
    selectIsSearch,
    selectUnSeenCount,
    (chat, user, searchList, isSearch, count) => {
        if (!chat?.messages?.length || (!searchList?.length && isSearch)) {
            return []
        }
        let list;
        if (searchList?.length && isSearch) {
            list = searchList
        } else {
            list = chat?.messages
        }
        const sortMessages = list?.sort((a, b) => {
            return new Date(a.sentAt * 1000) - new Date(b.sentAt * 1000);
        })
            .filter(el => !el.isHidden && !(el?.userProfile?.id === user.id && el?.isDeleted))
            .map(mes => mes = {
                ...mes,
                sentAt: new Date(mes.sentAt * 1000)

            })
            .reduce((acc, curr, index, arr) => {
                const newIndex = arr.length - count
                if (arr.indexOf(curr) === newIndex) {

                    acc.push({
                        newMess: curr
                    })
                }
                acc.push(curr)
                return acc

            }, [])
            .reduce((acc, curr, index, arr) => {
                let currDate = new Date(curr.sentAt)
                let nextDate = new Date(arr[index + 1]?.sentAt)
                if (index === 0) {
                    acc.push({
                        date: currDate.toDateString(),
                    })
                }
                if ((currDate.getUTCDate() < nextDate.getUTCDate() && currDate.getUTCMonth() === nextDate.getUTCMonth())
                    || (currDate.getUTCDate() > nextDate.getUTCDate() && currDate.getUTCMonth() !== nextDate.getUTCMonth())) {
                    acc.push(curr)
                    acc.push({
                        date: nextDate.toDateString(),
                    })

                } else {
                    acc.push(curr)
                }
                return acc
            }, [])

        return {
            ...chat,
            "messages": sortMessages,
            "unseenMessageCount": count
        }
    }
)

export const selectDataForMessageForm = createSelector(
    selectClearForm,
    selectEditMessage,
    selectReplyMessage,
    (isClearForm, editMessage, replyMessage) => {
        return {
            isClearForm,
            editMessage,
            replyMessage,
        }
    }
)

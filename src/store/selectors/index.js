// import { createSelector } from 'reselect'

export const selectUi = state => state.ui
export const selectModal = state => state.ui.isModal
export const selectFoldersList = state => state.folder.list
export const selectEditFolder = state => state.folder.editFolder



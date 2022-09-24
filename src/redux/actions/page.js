import { 
    ADD_MEDIA,
    SELECT_MEDIA,
    UPDATE_CONTEXT_MENU_ANCHOR
 } from '../../constants/actionTypes'

// Action Creators
export const addMedia = (media) => (dispatch) => {
    dispatch({type: ADD_MEDIA, payload: media})
}
export const selectMedia = (id,type) => (dispatch) => {
    dispatch({type: SELECT_MEDIA, payload: {id,type}})
}
export const setContextMenuAnchor = (pos) => (dispatch) => {
    dispatch({type: UPDATE_CONTEXT_MENU_ANCHOR, payload: {pos}})
}
import { 
    ADDED_MEDIA,
    SELECTED_MEDIA,
    UPDATED_CONTEXT_MENU_ANCHOR,
    UPDATED_CONTEXT_MENU_VISIBILITY,
    SET_HOVERED_ELEMENT
 } from '../../constants/actionTypes'
 import {
    MEDIA
 } from '../../constants/interactiveElements'

// Action Creators
export const addMedia = (media) => (dispatch) => {
    dispatch({type: ADDED_MEDIA, payload: media})
}
export const selectMedia = (id,type) => (dispatch) => {
    dispatch({type: SELECTED_MEDIA, payload: {id,type}})
}
export const setContextMenuAnchor = (pos) => (dispatch) => {
    dispatch({type: UPDATED_CONTEXT_MENU_ANCHOR, payload: {pos}})
}
export const updateContextMenuVisibility = (show) => (dispatch) => {
    dispatch({type: UPDATED_CONTEXT_MENU_VISIBILITY, payload: show})
}
export const enterMedia = (element) => (dispatch) => {
    dispatch({type: SET_HOVERED_ELEMENT, payload: {element, type: MEDIA}})
}
export const exitMedia = () => (dispatch) => {
    dispatch({type: SET_HOVERED_ELEMENT, payload: {element:{}, type: false}})
}
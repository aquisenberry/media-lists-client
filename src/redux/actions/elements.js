import { 
    ADD_MEDIA,
    SELECT_MEDIA
 } from '../../constants/actionTypes'

// Action Creators
export const addMedia = (media) => (dispatch) => {
    dispatch({type: ADD_MEDIA, payload: media})
}
export const selectMedia = (id,type) => (dispatch) => {
    dispatch({type: SELECT_MEDIA, payload: {id,type}})
}
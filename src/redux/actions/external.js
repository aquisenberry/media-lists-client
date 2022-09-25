import { 
    FETCH_BOARD_GAMES, 
    FETCH_MOVIES, FETCH_SHOWS,
    FETCH_VIDEO_GAMES, 
    FETCH_BOOKS, 
    UPDATE_SEARCH_TERM, 
    FETCH_MEDIA_DETAILS 
} from '../../constants/actionTypes'

import { 
    MOVIES, 
    SHOWS, 
    VIDEO_GAMES, 
    BOARD_GAMES, 
    BOOKS
} from '../../constants/routes'

import * as api from '../../api'

// Action Creators
export const fetchPopularMovies = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(MOVIES)
        dispatch({ type: FETCH_MOVIES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularShows = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(SHOWS)
        dispatch({ type: FETCH_SHOWS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularVideoGames = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(VIDEO_GAMES)
        dispatch({ type: FETCH_VIDEO_GAMES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularBoardGames = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(BOARD_GAMES)
        dispatch({ type: FETCH_BOARD_GAMES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularBooks = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(BOOKS)
        dispatch({ type: FETCH_BOOKS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchMediaDetails = (id,type) => async (dispatch) => {
    try{
        const {data} = await api.fetchMediaDetails(id,type)
        dispatch({type: FETCH_MEDIA_DETAILS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const setSearchTerm = (term) => (dispatch) => {
    dispatch({type: UPDATE_SEARCH_TERM, payload: term})
}
export const searchAllMedia = (query) => async (dispatch) => {
    try{
        const {movies,shows,videoGames,boardGames,books} = await api.fetchAllMediaByTerm(query)
        dispatch({ type: FETCH_MOVIES, payload: movies.data})
        dispatch({ type: FETCH_SHOWS, payload: shows.data})
        dispatch({ type: FETCH_VIDEO_GAMES, payload: videoGames.data})
        dispatch({ type: FETCH_BOARD_GAMES, payload: boardGames.data})
        dispatch({ type: FETCH_BOOKS, payload: books.data})
    }
    catch(error){
        console.log(error)
    }
}
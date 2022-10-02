import { 
    FETCHED_BOARD_GAMES, 
    FETCHED_MOVIES, 
    FETCHED_VIDEO_GAMES, 
    FETCHED_BOOKS, 
    UPDATED_SEARCH_TERM, 
    FETCHED_MEDIA_DETAILS, 
    FETCHED_SHOWS,
    FETCHED_ALL_MEDIA
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
        dispatch({ type: FETCHED_MOVIES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularShows = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(SHOWS)
        dispatch({ type: FETCHED_SHOWS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularVideoGames = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(VIDEO_GAMES)
        dispatch({ type: FETCHED_VIDEO_GAMES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularBoardGames = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(BOARD_GAMES)
        dispatch({ type: FETCHED_BOARD_GAMES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchPopularBooks = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMedia(BOOKS)
        dispatch({ type: FETCHED_BOOKS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const fetchMediaDetails = (id,type) => async (dispatch) => {
    try{
        const {data} = await api.fetchMediaDetails(id,type)
        dispatch({type: FETCHED_MEDIA_DETAILS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const setSearchTerm = (term) => {
    return { type: UPDATED_SEARCH_TERM, payload: term}
}
export const searchAllMedia = (query) => async dispatch => {
    try{
        const {movies,shows,videoGames,boardGames,books} = await api.fetchAllMediaByTerm(query)
        dispatch({ 
            type: FETCHED_ALL_MEDIA, 
            payload: {
                movies: movies.data, 
                shows: shows.data, 
                videoGames: videoGames.data, 
                boardGames: boardGames.data,
                bookd: books.data
            }
        })
    }
    catch(error){
        console.log(error)
    }
}
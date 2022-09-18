import { FETCH_BOARD_GAMES, FETCH_MOVIES, FETCH_SHOWS,FETCH_VIDEO_GAMES, FETCH_BOOKS, UPDATE_SEARCH_TERM } from '../../constants/actionTypes'
import * as api from '../../api'

// Action Creators
export const getPopularMovies = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularMovies()
        dispatch({ type: FETCH_MOVIES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const getPopularShows = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularShows()
        dispatch({ type: FETCH_SHOWS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const getPopularVideoGames = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularVideoGames()
        dispatch({ type: FETCH_VIDEO_GAMES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const getPopularBoardGames = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularBoardGames()
        dispatch({ type: FETCH_BOARD_GAMES, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
export const getPopularBooks = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPopularBooks()
        dispatch({ type: FETCH_BOOKS, payload: data})
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
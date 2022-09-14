import { FETCH_BOARD_GAMES, FETCH_MOVIES, FETCH_SHOWS,FETCH_VIDEO_GAMES, FETCH_BOOKS } from '../../constants/actionTypes'
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

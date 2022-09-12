import { FETCH_MOVIES, FETCH_SHOWS } from '../../constants/actionTypes'
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

import { FETCH_MOVIES } from '../../constants/actionTypes'
import * as api from '../../api'

// Action Creators
export const getMovies = () => async (dispatch) => {
    try{
        const { data } = await api.fetchMovies()
        dispatch({ type: FETCH_MOVIES, payload: data.Search})
    }
    catch(error){
        console.log(error)
    }
}

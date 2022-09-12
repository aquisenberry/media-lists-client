import axios from 'axios'
import { MOVIES, SHOWS, IGDB, ATLAS, BOOKS, LISTS } from '../constants/routes'

const url = 'http://localhost:5000/'

export const fetchPopularMovies = () => axios.get(`${url}${MOVIES}/popular`)
export const searchMovies = (query) => axios.get(`${url}${MOVIES}/search?q=${encodeURIComponent(query)}`)

export const fetchPopularShows = () => axios.get(`${url}${SHOWS}/popular`)
export const fetchVideoGames = (query) => axios.get(`${url}${IGDB}`,query)
export const fetchBoardGames = (query) => axios.get(`${url}${ATLAS}`,query)
export const fetchBooks = (query) => axios.get(`${url}${BOOKS}`,query)

export const fetchListsByUser = (user) => axios.get(`${url}${LISTS}`,user)
export const fetchList = (list_id) => axios.get(`${url}${LISTS}`,list_id)


// export const fetchPosts = () => axios.get(db)
// export const createPost = (newPost) => axios.post(db,newPost)
// export const updatePost = (id, updatedPost) => axios.patch(`${db}/${id}`,updatedPost)
// export const deletePost = (id) => axios.delete(`${db}/${id}`)
// export const likePost = (id) => axios.patch(`${db}/${id}/likePost`)
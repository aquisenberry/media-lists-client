import axios from 'axios'
import { MOVIES, SHOWS, VIDEO_GAMES, BOARD_GAMES, BOOKS, LISTS } from '../constants/routes'

const url = 'http://localhost:5000/'
//  Movies
export const fetchPopularMovies = () => axios.get(`${url}${MOVIES}/popular`)
export const searchMovies = (query) => axios.get(`${url}${MOVIES}/search?q=${encodeURIComponent(query)}`)

// TV Shows
export const fetchPopularShows = () => axios.get(`${url}${SHOWS}/popular`)

// Video Games
export const fetchPopularVideoGames = () => axios.get(`${url}${VIDEO_GAMES}/popular`)

// Board Games
export const fetchPopularBoardGames = () => axios.get(`${url}${BOARD_GAMES}/popular`)

// Books
export const fetchPopularBooks = () => axios.get(`${url}${BOOKS}/popular`)

// Lists
export const fetchListsByUser = (user) => axios.get(`${url}${LISTS}`,user)
export const fetchList = (list_id) => axios.get(`${url}${LISTS}`,list_id)


// export const fetchPosts = () => axios.get(db)
// export const createPost = (newPost) => axios.post(db,newPost)
// export const updatePost = (id, updatedPost) => axios.patch(`${db}/${id}`,updatedPost)
// export const deletePost = (id) => axios.delete(`${db}/${id}`)
// export const likePost = (id) => axios.patch(`${db}/${id}/likePost`)
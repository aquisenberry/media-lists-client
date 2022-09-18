import axios from 'axios'
import { MOVIES, SHOWS, VIDEO_GAMES, BOARD_GAMES, BOOKS, LISTS } from '../constants/routes'

const url = 'http://localhost:5000/'

// All
export const fetchAllMediaByTerm = async (query) => {
    const data = {}
    data.movies = await searchMovies(query)
    data.shows = await searchShows(query)
    data.videoGames = await searchVideoGames(query)
    data.boardGames = await searchBoardGames(query)
    data.books = await searchBooks(query)
    return data
}

//  Movies
export const fetchPopularMovies = () => axios.get(`${url}${MOVIES}/popular`)
export const searchMovies = (query) => axios.get(`${url}${MOVIES}/search?q=${encodeURIComponent(query)}`)

// TV Shows
export const fetchPopularShows = () => axios.get(`${url}${SHOWS}/popular`)
export const searchShows = (query) => axios.get(`${url}${SHOWS}/search?q=${encodeURIComponent(query)}`)

// Video Games
export const fetchPopularVideoGames = () => axios.get(`${url}${VIDEO_GAMES}/popular`)
export const searchVideoGames = (query) => axios.get(`${url}${VIDEO_GAMES}/search?q=${encodeURIComponent(query)}`)

// Board Games
export const fetchPopularBoardGames = () => axios.get(`${url}${BOARD_GAMES}/popular`)
export const searchBoardGames = (query) => axios.get(`${url}${BOARD_GAMES}/search?q=${encodeURIComponent(query)}`)

// Books
export const fetchPopularBooks = () => axios.get(`${url}${BOOKS}/popular`)
export const searchBooks = (query) => axios.get(`${url}${BOOKS}/search?q=${encodeURIComponent(query)}`)

// Lists
export const fetchListsByUser = (user) => axios.get(`${url}${LISTS}`,user)
export const fetchList = (list_id) => axios.get(`${url}${LISTS}`,list_id)


// export const fetchPosts = () => axios.get(db)
// export const createPost = (newPost) => axios.post(db,newPost)
// export const updatePost = (id, updatedPost) => axios.patch(`${db}/${id}`,updatedPost)
// export const deletePost = (id) => axios.delete(`${db}/${id}`)
// export const likePost = (id) => axios.patch(`${db}/${id}/likePost`)
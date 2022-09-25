import axios from 'axios'
import { MOVIES, SHOWS, VIDEO_GAMES, BOARD_GAMES, BOOKS, LISTS } from '../constants/routes'

const url = 'http://localhost:5000/'

// Media
export const fetchAllMediaByTerm = async (query) => {
    const data = {}
    data.movies = await searchMedia(MOVIES,query)
    data.shows = await searchMedia(SHOWS,query)
    data.videoGames = await searchMedia(VIDEO_GAMES,query)
    data.boardGames = await searchMedia(BOARD_GAMES,query)
    data.books = await searchMedia(BOOKS,query)
    return data
}
export const fetchPopularMedia = (type) => axios.get(`${url}${type}/popular`)
export const searchMedia = (type,query) => axios.get(`${url}${type}/search?q=${encodeURIComponent(query)}`)
export const fetchMediaDetails = (id, type) => axios.get(`${url}${type}/details?id=${id}`)

// Lists
export const fetchListsByUser = (user) => axios.get(`${url}${LISTS}`,user)
export const fetchList = (list_id) => axios.get(`${url}${LISTS}`,list_id)


// export const fetchPosts = () => axios.get(db)
// export const createPost = (newPost) => axios.post(db,newPost)
// export const updatePost = (id, updatedPost) => axios.patch(`${db}/${id}`,updatedPost)
// export const deletePost = (id) => axios.delete(`${db}/${id}`)
// export const likePost = (id) => axios.patch(`${db}/${id}/likePost`)
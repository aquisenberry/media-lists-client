import { 
    FETCHED_MOVIES,
    FETCHED_SHOWS,
    FETCHED_VIDEO_GAMES,
    FETCHED_BOARD_GAMES,
    FETCHED_BOOKS,
    FETCHED_MEDIA_DETAILS,
    UPDATED_SEARCH_TERM, 
    FETCHED_ALL_MEDIA
} from '../../constants/actionTypes'

const initialState = {
    searchTerm: "",
    movies:[],
    shows:[],
    videoGames: [],
    boardGames: [],
    books: [],
    mediaDetails: {}
}
const externalCalls = (media = initialState, action) => {
    switch (action.type) {
        case FETCHED_MOVIES:
            return { ...media, movies: action.payload}
        case FETCHED_SHOWS:
            return { ...media, shows: action.payload}
        case FETCHED_VIDEO_GAMES:
            return { ...media, videoGames: action.payload}
        case FETCHED_BOARD_GAMES:
            return { ...media, boardGames: action.payload}
        case FETCHED_BOOKS:
            return { ...media, books: action.payload}
        case FETCHED_ALL_MEDIA:
            return {
                ...media,
                movies: action.payload.movies,
                shows: action.payload.shows,
                videoGames: action.payload.videoGames,
                boardGames: action.payload.boardGames,
                books: action.payload.books
            }
        case FETCHED_MEDIA_DETAILS:
            return { ...media, mediaDetails: action.payload}
        case UPDATED_SEARCH_TERM: 
            return { ...media, searchTerm: action.payload}
        default:
            return media
    }
}

export default externalCalls
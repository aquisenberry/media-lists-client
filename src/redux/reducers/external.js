import { 
    FETCH_MOVIES,
    FETCH_SHOWS,
    FETCH_VIDEO_GAMES,
    FETCH_BOARD_GAMES,
    FETCH_BOOKS,
    UPDATE_SEARCH_TERM 
} from '../../constants/actionTypes'

const initialState = {
    searchTerm: "",
    movies:[],
    shows:[],
    videoGames: [],
    boardGames: [],
    books: []
}
const externalCalls = (media = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...media, movies: action.payload}
        case FETCH_SHOWS:
            return { ...media, shows: action.payload}
        case FETCH_VIDEO_GAMES:
            return { ...media, videoGames: action.payload}
        case FETCH_BOARD_GAMES:
            return { ...media, boardGames: action.payload}
        case FETCH_BOOKS:
            return { ...media, books: action.payload}
        case UPDATE_SEARCH_TERM: 
            return { ...media, searchTerm: action.payload}
        default:
            return media
    }
}

export default externalCalls
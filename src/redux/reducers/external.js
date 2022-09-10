import { 
    FETCH_MOVIES,
    FETCH_SHOWS,
    FETCH_VIDEO_GAMES,
    FETCH_BOARD_GAMES,
    FETCH_BOOKS 
} from '../../constants/actionTypes'

const mediaTemplate = {
    movies:[],
    shows:[],
    videoGames: [],
    boardGames: [],
    books: []
}
const externalCalls = (media = mediaTemplate, action) => {
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
        default:
            return media
    }
}

export default externalCalls
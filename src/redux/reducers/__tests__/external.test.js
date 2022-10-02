import externalCalls from '../external'
import {FETCHED_BOARD_GAMES, FETCHED_BOOKS, FETCHED_MOVIES, FETCHED_SHOWS, FETCHED_VIDEO_GAMES, UPDATED_SEARCH_TERM} from '../../../constants/actionTypes'
import mocks from './__mocks__/externals.mocks.json'

describe('External Reducer', () => {
    const store = {
        state: {
            searchTerm: "",
            movies:[],
            shows:[],
            videoGames: [],
            boardGames: [],
            books: [],
            mediaDetails: {}
        }
    } 
    const actionFactory = (type, payload) =>{
        return {type, payload}
    }
    
    it('updates the movies in the state', () =>{

        const action = actionFactory(FETCHED_MOVIES, mocks.movies)
        const newState = externalCalls(store.state, action)
        expect(newState.movies[0]._id).toBe(mocks.movies[0]._id)
    })
    it('only updates the movies in the state', () =>{
        const action = actionFactory(FETCHED_MOVIES, mocks.movies)
        const newState = externalCalls(store.state, action)
        expect(newState.shows).toBe(store.state.shows)
        expect(newState.videoGames).toBe(store.state.videoGames)
        expect(newState.boardGames).toBe(store.state.boardGames)
        expect(newState.books).toBe(store.state.books)
        expect(newState.mediaDetails).toBe(store.state.mediaDetails)
        expect(newState.searchTerm).toBe(store.state.searchTerm)
    })

    it('updates the shows in the state', () =>{

        const action = actionFactory(FETCHED_SHOWS, mocks.shows)
        const newState = externalCalls(store.state, action)
        expect(newState.shows[0]._id).toBe(mocks.shows[0]._id)
    })
    it('only updates the shows in the state', () =>{
        const action = actionFactory(FETCHED_SHOWS, mocks.shows)
        const newState = externalCalls(store.state, action)
        expect(newState.movies).toBe(store.state.movies)
        expect(newState.videoGames).toBe(store.state.videoGames)
        expect(newState.boardGames).toBe(store.state.boardGames)
        expect(newState.books).toBe(store.state.books)
        expect(newState.mediaDetails).toBe(store.state.mediaDetails)
        expect(newState.searchTerm).toBe(store.state.searchTerm)
    })

    it('updates the video games in the state', () =>{
        const action = actionFactory(FETCHED_VIDEO_GAMES, mocks.videoGames)
        const newState = externalCalls(store.state, action)
        expect(newState.videoGames[0]._id).toBe(mocks.videoGames[0]._id)
    })
    it('only updates the video games in the state', () =>{
        const action = actionFactory(FETCHED_VIDEO_GAMES, mocks.videoGames)
        const newState = externalCalls(store.state, action)
        expect(newState.movies).toBe(store.state.movies)
        expect(newState.shows).toBe(store.state.shows)
        expect(newState.boardGames).toBe(store.state.boardGames)
        expect(newState.books).toBe(store.state.books)
        expect(newState.mediaDetails).toBe(store.state.mediaDetails)
        expect(newState.searchTerm).toBe(store.state.searchTerm)
    })

    it('updates the board games in the state', () =>{

        const action = actionFactory(FETCHED_BOARD_GAMES, mocks.boardGames)
        const newState = externalCalls(store.state, action)
        expect(newState.boardGames[0]._id).toBe(mocks.boardGames[0]._id)
    })
    it('only updates the board games in the state', () =>{
        const action = actionFactory(FETCHED_BOARD_GAMES, mocks.boardGames)
        const newState = externalCalls(store.state, action)
        expect(newState.movies).toBe(store.state.movies)
        expect(newState.shows).toBe(store.state.shows)
        expect(newState.videoGames).toBe(store.state.videoGames)
        expect(newState.books).toBe(store.state.books)
        expect(newState.mediaDetails).toBe(store.state.mediaDetails)
        expect(newState.searchTerm).toBe(store.state.searchTerm)
    })

    it('updates the books in the state', () =>{

        const action = actionFactory(FETCHED_BOOKS, mocks.books)
        const newState = externalCalls(store.state, action)
        expect(newState.books[0]._id).toBe(mocks.books[0]._id)
    })
    it('only updates the books in the state', () =>{
        const action = actionFactory(FETCHED_BOOKS, mocks.books)
        const newState = externalCalls(store.state, action)
        expect(newState.movies).toBe(store.state.movies)
        expect(newState.shows).toBe(store.state.shows)
        expect(newState.videoGames).toBe(store.state.videoGames)
        expect(newState.boardGames).toBe(store.state.boardGames)
        expect(newState.mediaDetails).toBe(store.state.mediaDetails)
        expect(newState.searchTerm).toBe(store.state.searchTerm)
    })

    it('updates the searchterm in the state', () =>{

        const newSearchTerm = "Hello World"
        const action = actionFactory(UPDATED_SEARCH_TERM, newSearchTerm)
        const newState = externalCalls(store.state, action)
        expect(newState.searchTerm).toBe(newSearchTerm)
    })
    it('only updates the searchterm in the state', () => {
        const newSearchTerm = "Hello World"
        const action = actionFactory(UPDATED_SEARCH_TERM, newSearchTerm)
        const newState = externalCalls(store.state, action)
        expect(newState.movies).toBe(store.state.movies)
        expect(newState.shows).toBe(store.state.shows)
        expect(newState.videoGames).toBe(store.state.videoGames)
        expect(newState.boardGames).toBe(store.state.boardGames)
        expect(newState.books).toBe(store.state.books)
        expect(newState.mediaDetails).toBe(store.state.mediaDetails)
    })

    it.skip('updates the media details in the state', () => {

    })
})

const state = {
    external: {
        searchTerm: "",
        movies:[],
        shows:[],
        videoGames: [],
        boardGames: [],
        books: [],
        mediaDetails: {}
    },
    page: {
        media: [],
        contextMenuAnchor: {
            x:0,
            y:0
        },
        showContextMenu: false,
        contextTarget:{},
        contextType: false
    }
}

export const testUseAppSelector = (f) => f(state)
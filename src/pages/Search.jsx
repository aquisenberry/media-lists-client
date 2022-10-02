import React from 'react'
import MediaList from '../components/MediaList'
import SearchBar from '../components/Search'
import {useSelector} from 'react-redux'


function Search() {
    const movies = useSelector((state) => state.external.movies)
    const shows = useSelector((state) => state.external.shows)
    const videoGames = useSelector((state) => state.external.videoGames)
    const boardGames = useSelector((state) => state.external.boardGames)
    const books = useSelector((state) => state.external.books)

    
    return (
        <>
            <h1>Find Media</h1>
            <SearchBar />
            <MediaList title="Movies" mediaList={movies} />
            <MediaList title="TV Shows" mediaList={shows} />
            <MediaList title="Video Games" mediaList={videoGames} />
            <MediaList title="Board Games"mediaList={boardGames} />
            <MediaList title="Books"mediaList={books} />
            
        </>
    );
}

export default Search;
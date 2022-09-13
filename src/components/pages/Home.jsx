import React from 'react';
import MediaList from '../MediaList';
import {useSelector} from 'react-redux'


function Home() {
    const movies = useSelector((state)=> state.external.movies)
    const shows = useSelector((state) => state.external.shows)
    const videoGames = useSelector((state) => state.external.videoGames)
    const boardGames = useSelector((state) => state.external.boardGames)
    return (
        <>
            <h1>Media Lists</h1>
            <MediaList title="Movies" mediaList={movies} />
            <MediaList title="TV Shows" mediaList={shows} />
            <MediaList title="Video Games" mediaList={videoGames} />
            <MediaList title="Board Games"mediaList={boardGames} />
        </>
    );
}

export default Home;
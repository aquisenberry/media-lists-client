import React from 'react';
import MediaList from '../MediaList';
import {useSelector} from 'react-redux'


function Home() {
    const movies = useSelector((state)=> state.external.movies)
    const shows = useSelector((state) => state.external.shows)
    return (
        <>
            <h1>Media Lists</h1>
            <h2>Movies</h2>
            <MediaList mediaList={movies} />
            <h2>Shows</h2>
            <MediaList mediaList={shows} />
        </>
    );
}

export default Home;
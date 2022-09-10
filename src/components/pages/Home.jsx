import React from 'react';
import MediaList from '../MediaList';
import {useSelector} from 'react-redux'


function Home() {
    const movies = useSelector((state)=> state.external.movies)
    return (
        <>
            <h1>this is the homepage</h1>
            <MediaList mediaList={movies} />
        </>
    );
}

export default Home;
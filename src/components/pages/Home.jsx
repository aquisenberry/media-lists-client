import React, {useEffect} from 'react';
import MediaList from '../MediaList';
import {useSelector, useDispatch} from 'react-redux'
import { fetchPopularMovies, fetchPopularShows, fetchPopularVideoGames,fetchPopularBoardGames, fetchPopularBooks } from '../../redux/actions/external';


function Home() {
    const dispatch = useDispatch()
    const movies = useSelector((state)=> state.external.movies)
    const shows = useSelector((state) => state.external.shows)
    const videoGames = useSelector((state) => state.external.videoGames)
    const boardGames = useSelector((state) => state.external.boardGames)
    const books = useSelector((state) => state.external.books)

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchPopularShows())
        dispatch(fetchPopularVideoGames())
        dispatch(fetchPopularBoardGames())
        dispatch(fetchPopularBooks())
    }, [dispatch])
    return (
        <>
            <h1>Media Lists</h1>
            <MediaList title="Movies" mediaList={movies} />
            <MediaList title="TV Shows" mediaList={shows} />
            <MediaList title="Video Games" mediaList={videoGames} />
            <MediaList title="Board Games"mediaList={boardGames} />
            <MediaList title="Books"mediaList={books} />
        </>
    );
}

export default Home;
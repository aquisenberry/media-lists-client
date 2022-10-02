import React, {useEffect} from 'react';
import MediaList from '../components/MediaList';
import { useAppDispatch, useAppSelector } from '../redux/helpers/redux-hooks';
import { 
    // fetchMyMovies, 
    fetchPopularShows, 
    fetchPopularVideoGames,
    fetchPopularBoardGames, 
    fetchPopularBooks 
} from '../redux/actions/external';


function Home() {
    const dispatch = useAppDispatch()
    const movies = useAppSelector((state)=> state.external.movies)
    const shows = useAppSelector((state) => state.external.shows)
    const videoGames = useAppSelector((state) => state.external.videoGames)
    const boardGames = useAppSelector((state) => state.external.boardGames)
    const books = useAppSelector((state) => state.external.books)

    useEffect(() => {
    //     dispatch(fetchMyMovies())
        dispatch(fetchPopularShows())
        dispatch(fetchPopularVideoGames())
        dispatch(fetchPopularBoardGames())
        dispatch(fetchPopularBooks())
    }, [dispatch])
    return (
        <>
            <h1>My Lists</h1>
            <MediaList title="Movies" mediaList={movies} variant="tile" />
            <MediaList title="TV Shows" mediaList={shows} />
            <MediaList title="Video Games" mediaList={videoGames} />
            <MediaList title="Board Games"mediaList={boardGames} />
            <MediaList title="Books"mediaList={books} />
        </>
    );
}

export default Home;
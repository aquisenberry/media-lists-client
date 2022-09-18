import React from 'react';
import MediaList from '../MediaList';
import {useSelector, useDispatch} from 'react-redux'
import { setSearchTerm, searchAllMedia } from '../../redux/actions/external';
import SearchIcon from '../../assets/images/searchIcon.svg'


function Search() {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.external.searchTerm)
    const movies = useSelector((state) => state.external.movies)
    const shows = useSelector((state) => state.external.shows)
    const videoGames = useSelector((state) => state.external.videoGames)
    const boardGames = useSelector((state) => state.external.boardGames)
    const books = useSelector((state) => state.external.books)
    return (
        <>
            <h1>Find Media</h1>
            <div className="search">
                <input className="search__input"placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />
                <button>
                    <img 
                        src={SearchIcon}
                        alt= "Search"
                        onClick={() => dispatch(searchAllMedia(searchTerm))}
                    />
                </button>
            </div>

            <MediaList title="Movies" mediaList={movies} />
            <MediaList title="TV Shows" mediaList={shows} />
            <MediaList title="Video Games" mediaList={videoGames} />
            <MediaList title="Board Games"mediaList={boardGames} />
            <MediaList title="Books"mediaList={books} />
            
        </>
    );
}

export default Search;
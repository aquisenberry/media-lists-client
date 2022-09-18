
import React, {useEffect} from 'react';
import { setSearchTerm, searchAllMedia } from '../../redux/actions/external';
import {useSelector, useDispatch} from 'react-redux'
import SearchIcon from '../../assets/images/searchIcon.svg'

import './search.css'
const SearchBar = () => {

    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.external.searchTerm)

    const handleKeyDown = (e) =>{
        if (e.key === "Enter"){
            dispatch(searchAllMedia(searchTerm))
        }
    }

    useEffect(() => {
        dispatch(searchAllMedia(searchTerm))
    }, [dispatch])

    return (
        <div className="search">
                <input className="search__input"placeholder="Search for Media"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    onKeyDown={handleKeyDown}
                />
                <button className="search__button">
                    <img 
                        className="search__image"
                        src={SearchIcon}
                        alt= "Search"
                        onClick={() => dispatch(searchAllMedia(searchTerm))}
                    />
                </button>
            </div>
    )
}


export default SearchBar
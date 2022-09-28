
import React, {useEffect} from 'react';
import { setSearchTerm, searchAllMedia } from '../../redux/actions/external';
import { useAppDispatch, useAppSelector } from '../../redux/helpers/redux-hooks';
import SearchIcon from '../../assets/images/searchIcon.svg'

import './_styles.css'
const SearchBar = () => {

    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector((state) => state.external.searchTerm)

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
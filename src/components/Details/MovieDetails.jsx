import React, {useEffect} from 'react'
import {formattedDate} from '../../utils'

function MovieDetails({details}) {
    return (
        <div className='movie-details'>
            <div className='movie-details__container'>
                <div className='movie-details__poster'>
                    <img className='poster__image' src={details.poster} alt={`${details.title} poster`}/>
                </div>
                <h2 className='movie-details__release-date'>Released: {formattedDate(new Date(details.releaseDate))}</h2>
                <div className='movie-details__genres'>
                    <ul className='genres-list'>
                        {details.genres.map((genre) => (
                            <li className='genre' key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='movie-details__panel-2'>
                <div className='movie-details__overview-container'>
                    <p className='movie-details__overview'>{details.overview}</p>
                </div>
                <div className='movie-details__production'>
                    <ul className='movie-details__production-list'>
                        {details.productionCompanies.map((company) => (
                        <li className='company' key={company.id}>
                            <img src={company.logo} alt={`${company.name} logo`}/>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
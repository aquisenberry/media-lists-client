import React, {useEffect} from 'react'
import MovieDetails from './MovieDetails'

import './_styles.css'
// import { useAppDispatch,
//     useAppSelector 
// } from '../redux/helpers/redux-hooks'
// import { useParams } from 'react-router-dom'
// import { fetchMediaDetails } from '../redux/actions/external'


function MediaDetails({mediaDetails = {}}) {
    
    const mediaTypeComponentSwap = (details) => {
        switch(details.type){

            case 'movies':
                return <MovieDetails details={details}/>
            default:
                return <div>No details found</div>
        }
    }
    return (
        <>
            <div className='media-details'>
                {mediaTypeComponentSwap(mediaDetails)}
            </div> 
        </>
    );
}

export default MediaDetails;
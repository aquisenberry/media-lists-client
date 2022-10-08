import React, {useEffect} from 'react'
import { useAppDispatch,
    useAppSelector 
} from '../redux/helpers/redux-hooks'
import { useParams } from 'react-router-dom'
import { fetchMediaDetails } from '../redux/actions/external'
import Details from '../components/Details'


function MediaDetails() {
    const dispatch = useAppDispatch()
    const details = useAppSelector((state) => state.external.mediaDetails) || {}
    const params = useParams()
    useEffect(() => {
        dispatch(fetchMediaDetails(params._id,params.type))
    }, [dispatch,params])
    return (
        <>
            <h1>{details.title}</h1>
           <Details mediaDetails={details} />
            
        </>
    );
}

export default MediaDetails;
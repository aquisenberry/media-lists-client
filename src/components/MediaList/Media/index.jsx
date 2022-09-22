/*
    TODO: implement poster minimum height
*/

import React, {useEffect} from 'react'
import MediaActions from '../../MediaActions'
import  { addMedia, selectMedia } from '../../../redux/actions/elements'
import {useSelector, useDispatch} from 'react-redux'
import './_styles.css'

const Media = ({media}) => {
    const dispatch = useDispatch()
    let ref = useSelector((state) => state.elements.pageMedia.find((pm) => {return pm._id === media._id && pm.type === media.type}))
    useEffect(() => {
        dispatch(addMedia({...media, selected: false}))
    }, [])

    const handleMediaSelect = () => {
        dispatch(selectMedia(ref._id,ref.type))
    }
    return (
        <div className="media" onClick={handleMediaSelect}>
            <div className="media__image-container">
                <img 
                    className="media__image"
                    src={media.poster ? media.poster : 'https://via.placeholder.com/400'}
                    alt={media.poster ? media.title + ' Poster' : 'placeholder image'}
                />
            </div>
            <div className="media-meta">
                <h3 className="media-meta__title">{media.title}</h3>
                <h4 className="media-meta__year">{media.year}</h4>
            </div>
            <MediaActions self={ref}/>
        </div>
    )

}

export default Media
/*
    TODO: implement poster minimum height
*/

import React, {useEffect} from 'react'
import MediaActions from '../../MediaActions'
import  { addMedia, selectMedia } from '../../../redux/actions/page'
import {useSelector, useDispatch} from 'react-redux'
import './_styles.css'

const Media = ({media}) => {
    const dispatch = useDispatch()
    let ref = useSelector((state) => state.page.media.find((pm) => {return pm._id === media._id && pm.type === media.type}))
    useEffect(() => {
        dispatch(addMedia({...media, selected: false}))
    }, [])

    const handleMediaSelect = (e) => {
        // e.preventDefault()
        dispatch(selectMedia(ref._id,ref.type))
    }
    return (
        <div className="media" onClick={handleMediaSelect} onEx>
            <div className="media__image-container">
                <img 
                    className="media__image"
                    src={media.poster}
                    alt={`${media.title} Poster`}
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
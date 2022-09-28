/*
    TODO: implement poster minimum height
*/

import React, {useEffect} from 'react'
import  { addMedia, enterMedia, exitMedia } from '../../../redux/actions/page'
import { useAppDispatch } from '../../../redux/helpers/redux-hooks'
import './_styles.css'

const Media = ({media}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(addMedia({...media, selected: false}))
    }, [dispatch])

    const handleMouseEnterMedia = (e) => {
        dispatch(enterMedia(media))
    }
    const handleMouseExitMedia = (e) => {
        dispatch(exitMedia())
    }
    return (
        <div className="media" onMouseEnter={handleMouseEnterMedia} onMouseLeave={handleMouseExitMedia}>
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
        </div>
    )

}

export default Media
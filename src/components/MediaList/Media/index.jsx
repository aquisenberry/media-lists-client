/*
    TODO: implement poster minimum height
*/

import React from 'react'
import './Media.css'

const Media = ({media}) => {
    return (
        <div className="media">
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
        </div>
    )

}

export default Media
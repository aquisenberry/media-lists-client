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
        </div>
    )

}

export default Media
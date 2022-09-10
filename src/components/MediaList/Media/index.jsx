import React from 'react'
import './Media.css'

const Media = ({media}) => {


    return (
        <div className="media">
            <div className="media__year-container">
                <p className="media__year">{media.Year}</p>
            </div>
            <div className="media__image-container">
                <img 
                    className="media__image"
                    src={media.Poster !== 'N/A'? media.Poster : 'https://via.placeholder.com/400'}
                    alt={media.Poster !== 'N/A'? media.Title + ' Poster' : 'placeholder image'}
                />
            </div>
            <div className="media__meta-container">
                <span className="media__meta-type">{media.Type}</span>
                <h3 className="media__meta-title">{media.Title}</h3>
            </div>
        </div>
    )

}

export default Media
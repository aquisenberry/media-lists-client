import React from 'react'
import Media from './Media'

import './MediaList.css'
const MediaList = ({title,mediaList}) => {
    return (
        <div className="media-list">
        <h2 className="media-list__title">{title}</h2>
        <div className="media-list__container" >
            {mediaList.map((media) => <Media media={media}/>)}
        </div>
        </div>
    )
}

export default MediaList
import React from 'react'
import Media from './Media/altMedia'

import './MediaList.css'
const MediaList = ({mediaList}) => {
    return (
        <div className="media-container" >
            {mediaList.map((media) => <Media media={media}/>)}
        </div>
    )
}

export default MediaList
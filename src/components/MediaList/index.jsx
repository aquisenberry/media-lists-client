import React from 'react'
import Media from './Media'

import './MediaList.css'
const MediaList = ({mediaList}) => {
    return (
        <div className="container" >
            {console.log('mediaList',mediaList)}
            {mediaList.map((media) => <Media media={media}/>)}
        </div>
    )
}

export default MediaList
/*
// TODO: implement default image for when images are unavailable within a given list
//       image should be passed as a prop, when the MediaList is called
*/

import React from 'react'
import Media from './Media'

const TiledList = ({title,mediaList}) => {
    
        return (
            <div className="media-list--tile">
            <h2 className="media-list__title">{title}</h2>
            <div className="media-list__container--tile" >
                {mediaList.map((media) => <Media key={`${media.type}-${media._id}`} media={media}/>)}
            </div>
            </div>
        )
}


export default TiledList
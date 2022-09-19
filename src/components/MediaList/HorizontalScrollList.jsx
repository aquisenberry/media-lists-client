/*
// TODO: implement default image for when images are unavailable within a given list
//       image should be passed as a prop, when the MediaList is called
*/

import React from 'react'
import Media from './Media'

const HorizontalScroll = ({title,mediaList}) => {
    
        return (
            <div className="media-list">
            <h2 className="media-list__title">{title}</h2>
            <div className="media-list__container" >
                {mediaList.map((media) => <Media media={media}/>)}
            </div>
            </div>
        )
}


export default HorizontalScroll
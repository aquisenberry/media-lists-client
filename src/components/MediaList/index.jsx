/*
// TODO: implement default image for when images are unavailable within a given list
//       image should be passed as a prop, when the MediaList is called
*/

import React from 'react'
import HorizontalScroll from './HorizontalScrollList'
import TiledList from './TiledList'

import './_styles.css'
const MediaList = ({title,mediaList,variant}) => {
    switch (variant){
        case "tile":
            return(
                <TiledList title={title} mediaList={mediaList} />
            )
        default:
        return (
            <HorizontalScroll title={title} mediaList={mediaList}/>
        )
    }
}


export default MediaList
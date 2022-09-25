import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const MediaContext = () =>{
    const media = useSelector((state) => state.page.contextTarget)
    return (
        <ul className="context-menu__action-list">
            <li className="context-menu__action-item">
                <Link className="context-menu__link" to={`/details/${media.type}/${media._id}`} >Details</Link>
            </li>
            <li className="context-menu__action-item">Add to list</li>
            <li className="context-menu__action-item">Share</li>
        </ul>
    )
}

export default MediaContext
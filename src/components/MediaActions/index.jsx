import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'

import './_styles.css'
function MediaActions({self}) {
    const media = useSelector((state) => state.page?.media)
    
    let visibility = media?.find((pm) => pm?._id === self?._id && pm?.type === self?.type)?.selected 
    useEffect(() => {
        visibility = media?.find((pm) => pm?._id === self?._id && pm?.type === self?.type)?.selected 
    },[media])
    return (
        <div className={`media-actions ${visibility ? 'media-actions--selected' : ''}`}>
            <ul className="media-actions__action-list">
                <li className="media-actions__action-item">Details</li>
                <li className="media-actions__action-item">Add to list</li>
                <li className="media-actions__action-item">Share</li>
            </ul>
        </div>
    );
}

export default MediaActions;
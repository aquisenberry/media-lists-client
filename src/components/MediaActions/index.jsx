import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'


function MediaActions({self}) {
    const pageMedia = useSelector((state) => state.elements?.pageMedia)
    
    let visibility = pageMedia?.find((pm) => pm?._id === self?._id && pm?.type === self?.type)?.selected ? (<h1>This is visible</h1>) : (<h1>NOT VISIBLE</h1>)
    useEffect(() => {
        visibility = pageMedia?.find((pm) => pm?._id === self?._id && pm?.type === self?.type)?.selected ? (<h1>This is visible</h1>) : (<h1>NOT VISIBLE</h1>)
    },[pageMedia])
    return (
        <div className="media-actions">
            { visibility}
            <span>Details</span>
            <span>Add to list</span>
            <span>share</span>
        </div>
    );
}

export default MediaActions;
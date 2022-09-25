import React, {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setContextMenuAnchor, updateContextMenuVisibility} from '../../redux/actions/page'

import './_styles.css'
function ContextMenu() {
    const pos = useSelector((state) => state.page.contextMenuAnchor)
    const visibility = useSelector((state) => state.page.showContextMenu)
    const dispatch  = useDispatch()

    const handleContextMenu = useCallback((event) => {
        event.preventDefault()
        dispatch(setContextMenuAnchor({x: event.pageX, y: event.pageY}))
        dispatch(updateContextMenuVisibility(true))
    }, [])

    const handleClick = useCallback((event) => {
        dispatch(updateContextMenuVisibility(false))
    }, [])

    useEffect(() => {
        document.addEventListener("contextmenu",handleContextMenu )
        document.addEventListener("click", handleClick)
    return () => {
        document.removeEventListener("contextmenu", handleContextMenu)
        document.removeEventListener("click", handleClick)
    }
    }, [])

    return (
        <div className={`media-actions ${visibility ? 'media-actions--selected' : ''}`} style={{top:pos.y-10,left:pos.x - 10}}>
            <ul className="media-actions__action-list">
                <li className="media-actions__action-item">Details</li>
                <li className="media-actions__action-item">Add to list</li>
                <li className="media-actions__action-item">Share</li>
            </ul>
        </div>
    );
}

export default ContextMenu;
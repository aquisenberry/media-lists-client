import React, {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setContextMenuAnchor, updateContextMenuVisibility} from '../../redux/actions/page'
import MediaContext from './MediaContext'
import {
    MEDIA
} from '../../constants/interactiveElements'

import './_styles.css'
function ContextMenu() {
    const pos = useSelector((state) => state.page.contextMenuAnchor)
    const visibility = useSelector((state) => state.page.showContextMenu)
    const type = useSelector((state) => state.page.contextType)
    const dispatch  = useDispatch()

    const handleContextMenu = useCallback((event) => {
        event.preventDefault()
        dispatch(setContextMenuAnchor({x: event.pageX, y: event.pageY}))
        dispatch(updateContextMenuVisibility(true))
    }, [dispatch])

    const handleClick = useCallback((event) => {
        dispatch(updateContextMenuVisibility(false))
    }, [dispatch])

    useEffect(() => {
        document.addEventListener("contextmenu",handleContextMenu )
        document.addEventListener("click", handleClick)
    return () => {
        document.removeEventListener("contextmenu", handleContextMenu)
        document.removeEventListener("click", handleClick)
    }
    }, [handleContextMenu,handleClick])

    const menuWrapper = (context) =>{
        console.log(context)
        return (
            <div className={`context-menu ${visibility ? 'context-menu--open' : ''}`} style={{top:pos.y-10,left:pos.x - 10}}>
                {context}
            </div>
        )
    }
    console.log(type)
    switch (type) {
        case MEDIA:
            return menuWrapper(<MediaContext />)
        default:
            return <div> no Context</div>
    }
    
}

export default ContextMenu;
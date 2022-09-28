import React, {useEffect, useCallback} from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/helpers/redux-hooks'
import {setContextMenuAnchor, updateContextMenuVisibility} from '../../redux/actions/page'
import MediaContext from './MediaContext'
import {
    MEDIA
} from '../../constants/interactiveElements'

import './_styles.css'
function ContextMenu() {
    const pos = useAppSelector((state) => state.page.contextMenuAnchor)
    const visibility = useAppSelector((state) => state.page.showContextMenu)
    const type = useAppSelector((state) => state.page.contextType)
    const dispatch  = useAppDispatch()

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
        return (
            <div className={`context-menu ${visibility ? 'context-menu--open' : ''}`} style={{top:pos.y-10,left:pos.x - 10}}>
                {context}
            </div>
        )
    }
    switch (type) {
        case MEDIA:
            return menuWrapper(<MediaContext />)
        default:
            return <div> no Context</div>
    }
    
}

export default ContextMenu;
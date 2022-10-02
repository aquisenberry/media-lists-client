import { 
    ADDED_MEDIA, 
    SELECTED_MEDIA,
    UPDATED_CONTEXT_MENU_ANCHOR,
    UPDATED_CONTEXT_MENU_VISIBILITY,
    SET_HOVERED_ELEMENT
} from '../../constants/actionTypes'

const initialState = {
    media: [],
    contextMenuAnchor: {
        x:0,
        y:0
    },
    showContextMenu: false,
    contextTarget:{},
    contextType: false
}
const pageElements = (page = initialState, action) => {
    switch (action.type) {
        case ADDED_MEDIA:
            return { ...page, media: page.media.concat(action.payload)}
        case SELECTED_MEDIA:
            // TODO: Clean this up by passing intended media instead of part of it
            const selectedMedia = page.media.find((pm) => pm._id === action.payload.id && pm.type === action.payload.type)
            return {
                ...page, 
                media: page.media.filter((pm) => !(pm._id === action.payload.id && pm.type === action.payload.type))
                .map((pm) => {return {...pm, selected: false}})
                .concat({...selectedMedia,selected: true})
            }
        case UPDATED_CONTEXT_MENU_ANCHOR:
            return {...page, contextMenuAnchor: action.payload.pos}
        case UPDATED_CONTEXT_MENU_VISIBILITY:
            return {...page, showContextMenu: action.payload}
        case SET_HOVERED_ELEMENT:
            return {...page,
                contextTarget: page.showContextMenu? page.contextTarget : action.payload.element, 
                contextType: page.showContextMenu? page.contextType : action.payload.type}
        default:
            return page
    }
}

export default pageElements
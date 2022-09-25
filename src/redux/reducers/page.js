import { 
    ADD_MEDIA, 
    SELECT_MEDIA,
    UPDATE_CONTEXT_MENU_ANCHOR,
    UPDATE_CONTEXT_MENU_VISIBILITY,
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
        case ADD_MEDIA:
            return { ...page, media: page.media.concat(action.payload)}
        case SELECT_MEDIA:
            // TODO: Clean this up by passing intended media instead of part of it
            const selectedMedia = page.media.find((pm) => pm._id === action.payload.id && pm.type === action.payload.type)
            return {
                ...page, 
                media: page.media.filter((pm) => !(pm._id === action.payload.id && pm.type === action.payload.type))
                .map((pm) => {return {...pm, selected: false}})
                .concat({...selectedMedia,selected: true})
            }
        case UPDATE_CONTEXT_MENU_ANCHOR:
            return {...page, contextMenuAnchor: action.payload.pos}
        case UPDATE_CONTEXT_MENU_VISIBILITY:
            return {...page, showContextMenu: action.payload}
        case SET_HOVERED_ELEMENT:
            return {...page, contextTarget: action.payload.element}
        default:
            return page
    }
}

export default pageElements
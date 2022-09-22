import { 
    ADD_MEDIA, SELECT_MEDIA
} from '../../constants/actionTypes'

const initialState = {
    pageMedia: []
}
const pageElements = (elements = initialState, action) => {
    switch (action.type) {
        case ADD_MEDIA:
            return { ...elements, pageMedia: elements.pageMedia.concat(action.payload)}
        case SELECT_MEDIA:
            const selectedMedia = elements.pageMedia.find((pm) => pm._id === action.payload.id && pm.type === action.payload.type)
            return {
                ...elements, 
                pageMedia: elements.pageMedia.filter((pm) => !(pm._id === action.payload.id && pm.type === action.payload.type))
                .map((pm) => {return {...pm, selected: false}})
                .concat({...selectedMedia,selected: true})
            }
        default:
            return elements
    }
}

export default pageElements
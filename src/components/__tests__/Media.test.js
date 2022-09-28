import renderer from 'react-test-renderer'
import Media from '../MediaList/Media'
import {useAppDispatch, useAppSelector} from '../../redux/helpers/redux-hooks'
import { testUseAppSelector } from '../../redux/helpers/test-app-selector'

jest.mock('../../redux/helpers/redux-hooks')

describe("Media", () =>{
    const  media = {
        _id: '1',
        type:'movies',
        title: 'movie title',
        year: 2013,
        poster: `path/to/poster`,
        creator: [
        "data unavailable"
        ]
    }
    beforeEach(() =>{
        useAppSelector.mockImplementation(testUseAppSelector)
    })
    afterEach(() =>{
        jest.clearAllMocks()
    })
    it('has no markup regressions', () =>{
        const component = renderer.create(
            <Media media={media} />
        )

        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
        
    })
    // it('renders expected values', () => {
    //     const component = renderer.create(
    //         <Media media={media} />
    //     )
    //     // console.log(component)
    // })

})

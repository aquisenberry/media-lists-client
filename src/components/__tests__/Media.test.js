import renderer from 'react-test-renderer'
import Media from '../MediaList/Media'
import {useAppDispatch, useAppSelector} from '../../redux/helpers/redux-hooks'
import { testUseAppSelector } from '../../redux/helpers/test-app-selector'


jest.mock('../../redux/helpers/redux-hooks', () =>({
    useAppDispatch: jest.fn(() => {}),
    useAppSelector: jest.fn()
}))

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
        const dispatch = jest.fn();
        useAppDispatch.mockReturnValue(dispatch);
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
    it('renders expected values', () => {
        const component = renderer.create(
            <Media media={media} />
        )
        const instance = component.root


        expect(instance.findByProps({className: 'media__image'}).props.src).toEqual('path/to/poster')
        expect(instance.findByProps({className: 'media__image'}).props.alt).toEqual('movie title Poster')
        expect(instance.findByProps({className: 'media-meta__title'}).children).toContain('movie title')
        expect(instance.findByProps({className: 'media-meta__year'}).children).toContain('2013')
    })

})

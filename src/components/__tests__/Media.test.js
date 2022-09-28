import renderer from 'react-test-renderer'
import Media from '../MediaList/Media'
import {useAppDispatch, useAppSelector} from '../../redux/helpers/redux-hooks'
import { testUseAppSelector } from '../../redux/helpers/test-app-selector'
import {media} from './__mocks__/Media.mocks.json'

jest.mock('../../redux/helpers/redux-hooks', () =>({
    useAppDispatch: jest.fn(() => {}),
    useAppSelector: jest.fn()
}))

describe("Media", () =>{
    
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


        expect(instance.findByProps({className: 'media__image'}).props.src).toEqual('http://image.tmdb.org/t/p/w185/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg')
        expect(instance.findByProps({className: 'media__image'}).props.alt).toEqual('Orphan: First Kill Poster')
        expect(instance.findByProps({className: 'media-meta__title'}).children).toContain('Orphan: First Kill')
        expect(instance.findByProps({className: 'media-meta__year'}).children).toContain('2022')
    })

})

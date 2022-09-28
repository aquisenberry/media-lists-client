import renderer from 'react-test-renderer'
import MediaList from '../MediaList'
import {useAppDispatch, useAppSelector} from '../../redux/helpers/redux-hooks'
import { testUseAppSelector } from '../../redux/helpers/test-app-selector'
import mocks from './__mocks__/MediaList.mocks.json'


jest.mock('../../redux/helpers/redux-hooks', () =>({
    useAppDispatch: jest.fn(() => {}),
    useAppSelector: jest.fn()
}))

describe('MediaList', () =>{
    beforeEach(() =>{
        const dispatch = jest.fn();
        useAppDispatch.mockReturnValue(dispatch);
        useAppSelector.mockImplementation(testUseAppSelector)
    })
    afterEach(() =>{
        jest.clearAllMocks()
    })
    describe('horizontal scroll variant', () => {
        it('has no markup regressions', () =>{
            const component = renderer.create(
                <MediaList title="Movies" mediaList={mocks.movies} />
            )
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })
        it('displays given title', () =>{
            const component = renderer.create(
                <MediaList title="Shows" mediaList={mocks.shows} />
            )
            const instance = component.root
            expect(instance.findByProps({className: 'media-list__title'}).children).toContain('Shows')
        })
        it('displays the given number of media', () =>{
            const component = renderer.create(
                <MediaList title="Shows" mediaList={mocks.shows} />
            )
            const instance = component.root
            expect(instance.findByProps({className: 'media-list__container'}).children.length).toEqual(6)
        })
        it('is not a tiled container', () =>{
            const component = renderer.create(
                <MediaList title="Shows" mediaList={mocks.shows} />
            )
            const instance = component.root
            expect(instance.findByProps({className: 'media-list'}).children.find((i) => i.type === 'div').props.className).not.toEqual('media-list__container--tiled')
            // expect(instance.findByProps({className: 'media-list__container'}).children.length).toEqual(6)
        })

    })
    describe('tiled variant', () => {
        it('has no markup regressions', () =>{
            const component = renderer.create(
                <MediaList title="Movies" mediaList={mocks.movies} variant="tiled" />
            )
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
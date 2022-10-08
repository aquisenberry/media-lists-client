import Details from '../Details'
import renderer from 'react-test-renderer'
import {useAppDispatch, useAppSelector} from '../../redux/helpers/redux-hooks'
import { testUseAppSelector } from '../../redux/helpers/test-app-selector'
import mocks from './__mocks__/Details.mocks.json'

jest.mock('../../redux/helpers/redux-hooks', () =>({
    useAppDispatch: jest.fn(() => {}),
    useAppSelector: jest.fn()
}))

describe("Details",() => {
    describe (" - Movies", () => {
        // const mediaTypeComponentSwap = jest.fn()
        beforeEach(() =>{
            const dispatch = jest.fn();
            useAppDispatch.mockReturnValue(dispatch);
            useAppSelector.mockImplementation(testUseAppSelector)
        })
        afterEach(() =>{
            jest.clearAllMocks()
        })
        it("has only movie details", () => {
            const component = renderer.create(
                <Details mediaDetails={mocks.movie} />
            )
            const instance = component.root
            expect(instance.findByProps({className: 'movie-details'})).toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='show-details').length).not.toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='video-game-details').length).not.toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='board-game-details').length).not.toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='book-details').length).not.toBeTruthy()
        })

        it("has all movie details", () => {
            const component = renderer.create(
                <Details mediaDetails={mocks.movie} />
            )
            const instance = component.root
            expect(instance.findAll((i) => i.props.className === 'movie-details__poster').length).toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='movie-details__overview').length).toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='movie-details__genres').length).toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='movie-details__release-date').length).toBeTruthy()
            expect(instance.findAll((i) => i.props.className ==='movie-details__production').length).toBeTruthy()
        })
    })
})
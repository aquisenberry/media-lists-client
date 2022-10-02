import renderer from 'react-test-renderer'
import {getByRole, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from '../Search'
import {useAppDispatch, useAppSelector} from '../../redux/helpers/redux-hooks'
import { testUseAppSelector } from '../../redux/helpers/test-app-selector'
import { UPDATED_SEARCH_TERM } from '../../constants/actionTypes'


jest.mock('../../redux/helpers/redux-hooks')

describe("Search", () =>{
    
    const dispatch = jest.fn()
    beforeEach(() =>{
        useAppDispatch.mockImplementation(() => dispatch);
        useAppSelector.mockImplementation(testUseAppSelector)
    })
    afterEach(() =>{
        jest.clearAllMocks()
    })
    it('has no markup regressions', () =>{
        const component = renderer.create(
            <Search/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('calls setSearchTerm when the input is typed in', () =>{
        render(<Search/>)
        const input = screen.getByRole('textbox')
        userEvent.type(input, 'Hello')
        expect(dispatch.mock.calls.length).toBe(5)
        expect(dispatch).toHaveBeenNthCalledWith(1,{type: UPDATED_SEARCH_TERM, payload: 'H'});
    })
    it('calls searchAllMedia when the input is selected and [Enter] is pressed', () =>{
        render(<Search/>)
        const input = screen.getByRole('textbox')
        userEvent.type(input, '{enter}')
        expect(dispatch.mock.calls.length).toBe(1)
        // there is a more meaningful test to write here 
        // that verifies the correct action creator was dispatched
        // but I can't figure it out at the moment
    })
})


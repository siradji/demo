import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import {Button} from './index'

describe('Button test', () => {

    it('should render button', () => {
        const onClick = jest.fn()
        const {getByTestId} = render(<Button onClick={onClick} type="button"> Click me </ Button>)

        expect(getByTestId('main-button-cp')).toBeInTheDocument()
        expect(getByTestId('main-button-cp')).toBeTruthy()
    })

    it('should test for an onlick event ', () => {
        const onClick = jest.fn()
        const {getByTestId} = render(<Button onClick={onClick} type="button"> Click me </ Button>)

        fireEvent.click(getByTestId('main-button-cp'))

        expect(onClick).toBeCalledTimes(1)
        
    })

    it('should render type of button passed down as prop as element attribute', () => {
        const {getByTestId} = render(<Button onClick={jest.fn()} type="button"> Click me </ Button>) 

        expect(getByTestId('main-button-cp').getAttribute('type')).toStrictEqual('button')
    })
})

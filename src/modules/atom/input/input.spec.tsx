import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import {InputComponent, InputProps} from './Input'


describe('Input component', () => {

  it('should render input', () => {
    // @ts-ignore
    const {getByTestId} = render(<InputComponent handleChange={jest.fn()} type="text" placeholder="email" />)
    expect(getByTestId('main-input-cp')).toBeInTheDocument()
    expect(getByTestId('main-input-cp')).toBeTruthy()
  })

  it('should type inside of input', () => {
    const changeHandler = jest.fn()
    const {getByTestId} = render(<InputComponent handleChange={changeHandler} type="text" placeholder="email" />)

    const elem: HTMLInputElement = getByTestId('main-input-cp')

    fireEvent.change(elem, { target: { value: 'john@doe.com' } })

    expect(changeHandler).toBeCalledTimes(1)
    expect(elem.value).toStrictEqual('john@doe.com')
  })
})

import React from 'react'
import { render } from '@testing-library/react'

import {Logo } from './index'

describe('logo component', () => {
  it('should render button component', () => {
    const {getByTestId } = render(<Logo size="20">My site</Logo>)

    expect(getByTestId('main-logo-cp')).toBeTruthy()
    expect(getByTestId('main-logo-cp')).toBeInTheDocument()
    expect(getByTestId('main-logo-cp').innerHTML).toStrictEqual('My site')
  })
})

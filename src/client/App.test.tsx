import {shallow} from 'enzyme'
import * as React from 'react'

import App from './App'

import {MemoryRouter} from 'react-router-dom'

describe('<App />', () => {
  test('renders without exploding', () => {
    shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )
  })
})

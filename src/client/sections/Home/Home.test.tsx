import {shallow} from 'enzyme'
import * as React from 'react'

import Home from './Home'

describe('<Home />', () => {
  it('renders my name', () => {
    const component = shallow(<Home />)

    expect(component.text()).toContain('Aditya Thakral')
  })
})

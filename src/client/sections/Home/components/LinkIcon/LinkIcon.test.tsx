import {shallow} from 'enzyme'
import * as React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import LinkIcon from './LinkIcon'

describe('<LinkIcon />', () => {
  describe('link', () => {
    it('renders a link', () => {
      const to = 'some.website'
      const wrapper = shallow(<LinkIcon to={to} icon="file" />)
      const anchor = wrapper.find('a')

      expect(anchor).toHaveLength(1)
      expect(anchor).toHaveProp('href', to)
    })
    it('renders a link that opens in a new tab', () => {
      const wrapper = shallow(<LinkIcon to="" icon="file" />)
      const anchor = wrapper.find('a')

      expect(anchor).toHaveLength(1)
      expect(anchor).toHaveProp('target', '_blank')
    })
  })

  describe('icon', () => {
    it('renders an icon inside the link', () => {
      const icon = 'firefox'
      const wrapper = shallow(<LinkIcon to="" icon={icon} />)
      const iconWrapper = wrapper.find('a').find(FontAwesomeIcon)

      expect(iconWrapper).toHaveLength(1)
      expect(iconWrapper).toHaveProp('icon', icon)
    })

    it('renders an icon of size 2x', () => {
      const icon = 'firefox'
      const wrapper = shallow(<LinkIcon to="" icon={icon} />)
      const iconWrapper = wrapper.find('a').find(FontAwesomeIcon)

      expect(iconWrapper).toHaveLength(1)
      expect(iconWrapper).toHaveProp('size', '2x')
    })
  })
})

import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import {shallow} from 'enzyme'
import * as React from 'react'

import {LinkIcon} from './components'
import Home from './Home'

describe('<Home />', () => {
  it('renders my name', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.text()).toContain('Aditya Thakral')
  })

  describe('links', () => {
    it('renders github link icon', () => {
      const wrapper = shallow(<Home />)
      const githubLinkIcon = wrapper.find(LinkIcon).filter({icon: faGithub})

      expect(githubLinkIcon).toExist()
      expect(githubLinkIcon).toHaveProp('to', 'https://github.com/9at8')
    })

    it('renders linkedin link icon', () => {
      const wrapper = shallow(<Home />)
      const linkedinLinkIcon = wrapper.find(LinkIcon).filter({icon: faLinkedin})

      expect(linkedinLinkIcon).toExist()
      expect(linkedinLinkIcon).toHaveProp(
        'to',
        'https://www.linkedin.com/in/99at8',
      )
    })

    it('renders resume link icon', () => {
      const wrapper = shallow(<Home />)
      const resumeLinkIcon = wrapper.find(LinkIcon).filter({icon: faFile})

      expect(resumeLinkIcon).toExist()
      expect(resumeLinkIcon).toHaveProp('to', '/resume.pdf')
    })

    it('renders email link icon', () => {
      const wrapper = shallow(<Home />)
      const emailLinkIcon = wrapper.find(LinkIcon).filter({icon: faEnvelope})

      expect(emailLinkIcon).toExist()
      expect(emailLinkIcon).toHaveProp(
        'to',
        'mailto:aditya.thakral@edu.uwaterloo.ca',
      )
    })
  })
})

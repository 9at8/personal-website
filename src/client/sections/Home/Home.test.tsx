import {mount} from 'enzyme'
import * as React from 'react'

import {Highlight} from 'components'

import Home from './Home'

describe('<Home />', () => {
  it('renders my name', () => {
    const wrapper = mount(<Home />)

    expect(wrapper.text()).toContain('Adi')
  })

  describe('links', () => {
    it('renders github link', () => {
      const wrapper = mount(<Home />)
      const githubLink = wrapper
        .find(Highlight)
        .filterWhere(highlight => highlight.text() === 'GitHub')

      expect(githubLink).toExist()
      expect(githubLink).toHaveProp('link', 'https://github.com/9at8')
    })

    it('renders linkedin link', () => {
      const wrapper = mount(<Home />)
      const linkedinLink = wrapper
        .find(Highlight)
        .filterWhere(highlight => highlight.text() === 'LinkedIn')

      expect(linkedinLink).toExist()
      expect(linkedinLink).toHaveProp(
        'link',
        'https://www.linkedin.com/in/99at8',
      )
    })

    it('renders resume link', () => {
      const wrapper = mount(<Home />)
      const resumeLinkIcon = wrapper
        .find(Highlight)
        .filterWhere(highlight => highlight.text() === 'resume')

      expect(resumeLinkIcon).toExist()
      expect(resumeLinkIcon).toHaveProp('link', 'resume.pdf')
    })

    it('renders email link', () => {
      const wrapper = mount(<Home />)
      const emailLink = wrapper
        .find(Highlight)
        .filterWhere(highlight => highlight.text() === 'email')

      expect(emailLink).toExist()
      expect(emailLink).toHaveProp('link', 'mailto:hello@9at8.dev')
    })
  })
})

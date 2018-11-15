import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'

import {LinkIcon} from './components'

import * as styles from './Home.scss'
import me from './me.jpg'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imageCrop}>
        <img src={me} className={styles.image} />
      </div>
      <h1 className={styles.name}>
        <span className={styles.nickName}>Adi</span>tya Thakral
      </h1>
      <p>Software developer, Beat Saber ninja</p>
      <p className={styles.links}>
        <LinkIcon to="https://github.com/9at8" icon={faGithub} />
        <LinkIcon to="https://www.linkedin.com/in/99at8" icon={faLinkedin} />
        <LinkIcon to="/resume.pdf" icon={faFile} />
        <LinkIcon
          to="mailto:aditya.thakral@edu.uwaterloo.ca"
          icon={faEnvelope}
        />
      </p>
    </div>
  )
}

export default Home

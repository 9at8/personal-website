import * as React from 'react'

import {Frame, Highlight} from 'components'

import {ImageGallery} from './components'

import * as styles from './Home.scss'
import me from './me.jpg'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imageGallery}>
        <ImageGallery images={[{src: me, alt: 'Picture of Aditya Thakral'}]} />
      </div>
      <Frame>
        <header>
          <h1>Hey 👋, I'm Adi.</h1>
          <h3>My full name is Aditya Thakral, but everyone calls me Adi 🤷‍♂️</h3>
        </header>
        <section>
          <p>
            I’m a junior at the <Highlight>University of Waterloo</Highlight>,
            studying <Highlight>computer science</Highlight>.
          </p>
          <p>
            I love working with functional programming languages. 👨‍💻 I have had
            some experience here and there with Scheme, Standard ML, and
            Haskell.
          </p>
          <p>
            When I’m not writing code, I love binging{' '}
            <Highlight link="https://www.tvtime.com/en/user/10452553/profile">
              TV Shows
            </Highlight>
            , watching movies, and most importantly, playing{' '}
            <Highlight link="http://beatsaber.com/">Beat Saber</Highlight>.
          </p>
          <p>
            You can shoot me an{' '}
            <Highlight link="mailto:contact@9at8.dev">email</Highlight>,
            checkout my{' '}
            <Highlight link="https://github.com/9at8">GitHub</Highlight>,{' '}
            <Highlight link="https://www.linkedin.com/in/99at8">
              LinkedIn
            </Highlight>
            , or <Highlight link="/resume.pdf">Resume</Highlight>.
          </p>
          <p>Heads up, I ❤️ emojis and gifs!</p>
        </section>
        <section>
          <header>
            <h3>Some recent ... adventure(s)?</h3>
          </header>
          <article>
            <header>
              <p>
                <b>Giving my laptop a new body</b>
                <br />
                <time dateTime="2019-06-06">June 6, 2019</time>
              </p>
            </header>
            <p>
              During the winter term at Waterloo, I noticed something weird
              happening with my 2-in-1 laptop. It looked like the screws
              attached to the screen hinges had torn through the bottom base,
              which made the screen wobble a lot whenever I touched it. For the
              time being, I decided to put some tape near the hinges, 🙃 and
              hope that it lasts for some time (it did not). At least until I
              move to Austin for my internship at{' '}
              <Highlight link="https://data.world">data.world</Highlight>. (I
              could hear a crackling sound from near the screen 😖)
            </p>
            <p>
              As soon as I reached Austin, I ordered a new bottom base for my
              laptop from ebay. Like most spare parts, it was shipping from
              China. This meant waiting another couple weeks to fix my laptop.
              But when it was finally here, I opened up the laptop, and tried
              replacing it. The part where the screw screws 🔩 into is the frame
              of the laptop. To my surprise, it was also busted. I took apart
              the screen while I was at it, and kept my{' '}
              <Highlight>1-in-2 laptop</Highlight> in a cardboard box, with some
              bubble wrap, and ordered a brand new frame.
            </p>
            <p>
              In order to use the new frame, I had to remove ALL the parts from
              my laptop: power buttons, speakers, touchpad, keyboard, ..., you
              name it, I had to remove it. (except the screen of course) I
              noticed that removing all these components was way quicker than
              putting them back in. But once it was assembled, I had an almost
              brand new laptop, for around USD 80! ✨
            </p>
          </article>
        </section>
      </Frame>
    </div>
  )
}

export default Home

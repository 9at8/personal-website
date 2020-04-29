import * as React from 'react'

import {Frame, Highlight} from 'components'

import * as styles from './Home.scss'
import {MyPictures} from './MyPictures'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imageGallery}>
        <MyPictures />
      </div>
      <Frame>
        <header>
          <h1>Hey 👋, I'm Adi.</h1>
          <h3>
            My first name is Aditya, but everyone calls me Adi because it's
            easier 🤷‍♂️
          </h3>
        </header>
        <section>
          <p>
            I’m a senior at the <Highlight>University of Waterloo</Highlight>,
            studying <Highlight>computer science</Highlight>.
          </p>
          <p>
            I love working with TypeScript. So much that I helped move{' '}
            <Highlight link="https://data.world">data.world</Highlight> from
            Flow to TypeScript. I contributed to an{' '}
            <Highlight link="https://github.com/datadotworld/ts-migration">
              open source script
            </Highlight>{' '}
            that successfully performed the conversion on their 300k LOC web app.
          </p>
          <p>
            I have a strong interest in working with functional programming
            languages. 👨‍💻 For my compilers class this term, I am building a{' '}
            <Highlight>compiler</Highlight> for Java in Scala.
          </p>
          <p>
            When I’m not writing code, I am either binging{' '}
            <Highlight link="https://www.tvtime.com/en/user/10452553/profile">
              TV Shows
            </Highlight>
            , watching movies, or playing{' '}
            <Highlight link="https://beatsaber.com/">Beat Saber</Highlight> or{' '}
            <Highlight link="https://fitxr.com/">Box VR</Highlight>.
          </p>
          <p>
            You can get in touch with me using{' '}
            <Highlight link="mailto:hello@9at8.dev">email</Highlight>, checkout
            some of my projects on{' '}
            <Highlight link="https://github.com/9at8">GitHub</Highlight>,
            connect with me on{' '}
            <Highlight link="https://www.linkedin.com/in/99at8">
              LinkedIn
            </Highlight>
            , read more on my <Highlight link="resume.pdf">resume</Highlight>.
          </p>
        </section>
        <section>
          <header>
            <h3>Some recent ... adventure(s)?</h3>
          </header>
          <article>
            <header>
              <p>
                <b>
                  Owning your data (
                  <Highlight link="https://homeserver.9at8.dev">
                    homeserver
                  </Highlight>
                  )
                </b>
                <br />
                <time dateTime="2020-01-31">January 31, 2020</time>
              </p>
            </header>
            <p>
              Recently, I started exploring{' '}
              <Highlight link="https://nextcloud.com">Nextcloud</Highlight>.
              Nextcloud is a self hosted platform that lets you send email,
              backup contacts, pictures, and do a lot more with a homeserver. It
              lets you share files like Google Drive, sync your calendar, and so
              much more. All of this can be done right inside your home, on a
              server that you are not going to use for anything else. The
              benefit? You own your data.
            </p>
            <p>
              So far, I'm testing the waters - testing out the reliability of
              the android client, linux file sync client, and a lot more
              features. So far it is going great. I think I can see myself
              running my own instance of nextcloud on the cloud.
            </p>
            <p>
              If you would like to try it out, send me an email at{' '}
              <Highlight link="mailto:hello@9at8.dev">hello@9at8.dev</Highlight>
              . I can give you access, and we can schedule something to chat
              about it!
            </p>
          </article>
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

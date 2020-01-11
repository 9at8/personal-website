import * as React from 'react'

import {ImageGallery} from './../components'

import meAman from './me-aman.jpg'
import meBear from './me-bear.jpg'
import meBeard from './me-beard.jpg'
import meFormal from './me-formal.jpg'
import meGlasses from './me-glasses.jpg'
import meKid from './me-kid.jpg'
import meLove from './me-love.jpg'
import mePinkSweater from './me-pink-sweater.jpg'
import meWhitePolo from './me-white-polo.jpg'

const pictures = [
  meWhitePolo,
  meAman,
  meBear,
  mePinkSweater,
  meBeard,
  meGlasses,
  meFormal,
  meLove,
  meKid,
]

export function MyPictures() {
  return (
    <ImageGallery
      images={pictures.map(src => ({
        src: process.env.NODE_ENV === 'production' ? src.slice(1) : src,
        alt: 'Picture of Aditya Thakral',
      }))}
    />
  )
}

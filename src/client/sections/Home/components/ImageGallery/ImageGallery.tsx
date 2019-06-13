import * as React from 'react'

import * as styles from './ImageGallery.scss'

interface Image {
  src: string
  alt: string
}

interface Props {
  images: Image[]
}

export default function ImageGallery({images}: Props) {
  const image = images[0]

  return (
    <figure className={styles.imageGallery}>
      <div
        style={{backgroundImage: `url(${image.src})`}}
        className={styles.backgroundImage}
      />
      <img {...image} className={styles.image} />
    </figure>
  )
}

export {Image, Props}

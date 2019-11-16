import * as React from 'react'

import * as styles from './ImageGallery.scss'

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string,
}

function Image(props: ImageProps) {
  const {hidden, ...image} = props
  return (
    <figure>
      <div
        style={{backgroundImage: `url(${image.src})`}}
        className={
          hidden ? styles.hiddenBackgroundImage : styles.visibleBackgroundImage
        }
      />
      <img
        {...image}
        decoding={hidden ? 'async' : 'sync'}
        className={hidden ? styles.hiddenImage : styles.visibleImage}
      />
    </figure>
  )
}

// https://stackoverflow.com/questions/14271865/how-does-javascript-handle-modulo
function mod(n: number, p: number) {
  const r = n % p
  return r < 0 ? r + p : r
}

export interface Props {
  images: ImageProps[]
}

export default function ImageGallery({images}: Props) {
  const [visibleIdx, setVisibleIdx] = React.useState(0)
  const onLeftClick = () => setVisibleIdx(mod(visibleIdx - 1, images.length))
  const onRightClick = () => setVisibleIdx(mod(visibleIdx + 1, images.length))

  return (
    <div className={styles.imageGallery}>
      {images.map((image, idx) => (
        <Image key={image.src} {...image} hidden={visibleIdx !== idx} />
      ))}
      <div className={styles.control}>
        <button className={styles.controlButton} onClick={onLeftClick}>
          <div className={styles.controlIcon}>{'<'}</div>
        </button>
        <button className={styles.controlButton} onClick={onRightClick}>
          <div className={styles.controlIcon}>{'>'}</div>
        </button>
      </div>
    </div>
  )
}

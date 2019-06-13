import * as React from 'react'

import * as styles from './Highlight.scss'

export interface Props {
  link?: string
  children: React.ReactNode
}

export default function Highlight({children, link}: Props) {
  return link ? (
    <a href={link} target="_blank" rel="noopener" className={styles.blue}>
      <u>{children}</u>
    </a>
  ) : (
    <mark className={styles.orange}>{children}</mark>
  )
}

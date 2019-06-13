import * as React from 'react'

import * as styles from './Frame.scss'

export interface Props {
  children?: React.ReactNode
}

function Frame(props: Props) {
  return (
    <main className={styles.frame}>
      <div className={styles.boundary}>{props.children}</div>
    </main>
  )
}

export default Frame

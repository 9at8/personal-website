import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import * as React from 'react'

import * as styles from './LinkIcon.scss'

export interface Props {
  to: string
  icon: FontAwesomeIconProps['icon']
  noOpener?: boolean
}

function LinkIcon({to, icon, noOpener}: Props) {
  return (
    <a
      href={to}
      className={styles.linkIcon}
      target="_blank"
      rel={noOpener ? 'noOpener' : ''}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  )
}

export default LinkIcon

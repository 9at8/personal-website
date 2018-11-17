import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import * as React from 'react'

import * as styles from './LinkIcon.scss'

export interface Props {
  to: string
  icon: FontAwesomeIconProps['icon']
}

function LinkIcon({to, icon}: Props) {
  return (
    <a href={to} className={styles.linkIcon} target="_blank">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  )
}

export default LinkIcon

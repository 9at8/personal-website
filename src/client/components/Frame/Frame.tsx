import * as React from 'react'

export interface Props {
  children?: React.ReactNode
}

function Frame(props: Props) {
  return <>{props.children}</>
}

export default Frame

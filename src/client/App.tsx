import React, {Factory, useEffect} from 'react'
import GoogleAnalytics from 'react-ga'
import {Route, RouteComponentProps, Switch} from 'react-router-dom'

import {Home} from './sections'

import './App.scss'

function withPageTrack(Component: Factory<RouteComponentProps>) {
  return (props: RouteComponentProps) => {
    useEffect(() => {
      GoogleAnalytics.initialize('UA-142499273-1', {debug: true})
      GoogleAnalytics.pageview(props.location.pathname)
    }, [])

    return <Component {...props} />
  }
}

function App() {
  return (
    <Switch>
      <Route path="/" component={withPageTrack(Home)} />
    </Switch>
  )
}

export default App

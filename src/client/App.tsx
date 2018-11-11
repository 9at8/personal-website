import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home} from './sections'

import './App.scss'

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
)

export default App

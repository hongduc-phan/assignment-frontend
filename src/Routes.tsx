import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CatDetail from './pages/CatDetail'

const Routes = () => (
  <Switch>
    <Route exact path="/cats" component={Home} />
    <Route exact path="/cats/:id" component={CatDetail} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect exact from="/" to="/cats" />
    <Redirect from="/" to="/not-found" />
  </Switch>
)

export default Routes

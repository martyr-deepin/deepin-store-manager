import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import App from './App'
import create from './container/create'
import createdList from './container/createdList'

export default function Routers () {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Redirect exact from='/' to='/create/cn' />
          <Route path='/create/:type?' component={create} />
          <Route path='/createdList' component={createdList} />
        </Switch>
      </App>
    </BrowserRouter>
  )
}

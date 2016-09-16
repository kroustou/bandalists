/* eslint-disable no-unused-vars */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/containers/Home'
import {Dashboard} from '../dashboard/'
import {Profile} from '../profile/'
import {Login} from '../auth'
import bandRoutes from '../bands/routes'

export const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='login/' component={Login}/>
        <Route path='profile/' component={Profile}/>
        <Route path='dashboard/' component={Dashboard}/>
        {bandRoutes}
    </Route>
)

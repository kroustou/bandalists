/* eslint-disable no-unused-vars */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/containers/Home'
import {Dashboard} from '../dashboard/'
import {Profile} from '../profile/'
import {Login, SignUp} from '../auth'
import bandRoutes from '../bands/routes'
import dashboardRoutes from '../dashboard/routes'
import {redirectIfAuth, requireAuth} from '../auth/'


export const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home} onEnter={redirectIfAuth} />
        <Route path='sign-up/' component={SignUp} onEnter={redirectIfAuth}/>
        <Route path='login/' component={Login} onEnter={redirectIfAuth}/>
        <Route path='profile/' component={Profile} onEnter={requireAuth}/>
        {dashboardRoutes}
        {bandRoutes}
    </Route>
)

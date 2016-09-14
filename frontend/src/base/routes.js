/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import {Dashboard} from '../dashboard/'
import {Profile} from '../profile/'
import {Login} from '../auth'
import bandRoutes from '../bands/routes'

export const routes = (
    <Route path='/' component={App}>
        <Route path='login/' component={Login}/>
        <Route path='profile/' component={Profile}/>
        <Route path='dashboard/' component={Dashboard}/>
        {bandRoutes}
    </Route>
)

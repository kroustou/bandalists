/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import {Dashboard} from '../dashboard/'
import Profile from './components/containers/Profile'
import {Login} from '../auth'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='login/' component={Login}/>
            <Route path='profile/' component={Profile}/>
            <Route path='dashboard/' component={Dashboard}>
            </Route>
        </Route>
    </div>
)

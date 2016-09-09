/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Dashboard from './components/Dashboard'
import Profile from './containers/Profile'
import Login from './components/auth/Login'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/login/' component={Login}/>
            <Route path='/profile/' component={Profile}/>
            <Route path='/dashboard/' component={Dashboard}/>
        </Route>
    </div>
)

/* eslint-disable no-unused-vars */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Dashboard from './components/'
import ThreadDetails from './components/ThreadDetails'
import Posts from './components/Posts'

export default (
    <Route path='dashboard/' component={Dashboard}>
        <IndexRoute path='' component={Posts}/>
        <Route path='thread/:id/' component={ThreadDetails}/>
    </Route>
)

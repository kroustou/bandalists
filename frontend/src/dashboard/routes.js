/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import Dashboard from './components/'
import ThreadDetails from './components/ThreadDetails'

export default (
    <Route path='dashboard/' component={Dashboard}>
        <Route path='thread/:id/' component={ThreadDetails}/>
    </Route>
)

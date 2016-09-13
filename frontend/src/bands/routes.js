/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import Band from './components/Band'
import NewBand from './components/NewBand'
import EditBand from './components/EditBand'

export default (
    <Route path='/bands/' component={Band}>
        <Route path='add/' component={NewBand}/>
    </Route>
)

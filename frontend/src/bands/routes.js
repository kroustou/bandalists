/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import Band from './components/Band'
import NewBand from './components/NewBand'
import EditBand from './components/EditBand'
import {requireAuth} from '../auth/'

export default (
    <Route path='/bands/' component={Band} onEnter={requireAuth}>
        <Route path='/bands/add/' component={NewBand}/>
    </Route>
)

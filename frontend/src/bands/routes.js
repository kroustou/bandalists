/* eslint-disable no-unused-vars */
import React from 'react'
import {Route} from 'react-router'
import Band from './components/Band'
import NewBand from './components/NewBand'
import EditBand from './components/EditBand'
import BandSelector from './components/BandSelector'
import {requireAuth} from '../auth/'
import BandEdit from './components/EditBand'

export default (
    <div>
        <Route path='/bands/' component={Band} onEnter={requireAuth}/>
        <Route path='/bands/edit/:bandSlug/' component={BandEdit} onEnter={requireAuth}/>
    </div>
)

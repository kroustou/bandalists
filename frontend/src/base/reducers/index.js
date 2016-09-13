import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {reducer as formReducer} from 'redux-form'
import {dashboardReducer} from '../../dashboard'
import {authReducer} from '../../auth'
import bandReducer from '../../bands/reducer'

export const reducers = combineReducers({
    session: authReducer,
    bands: bandReducer,
    routing: routerReducer,
    dashboard: dashboardReducer,
    form: formReducer
})

import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import { reducer as formReducer } from 'redux-form'
import {dashboardReducer} from '../dashboard'
import {authReducer} from '../auth'


export const reducers = combineReducers({
    session: authReducer,
    routing: routerReducer,
    dashboard: dashboardReducer,
    form: formReducer
})

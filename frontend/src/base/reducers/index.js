import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {reducer as formReducer} from 'redux-form'
import {dashboardReducer} from '../../dashboard'
import {authReducer} from '../../auth'
import notificationsReducer from '../../notifications/reducer'
import bandReducer from '../../bands/reducer'

const baseReducer = (state = {}, action) => {
    switch (action.type) {
    case 'MESSAGE': {
        return Object.assign({}, state, {message: action.message})
    }
    default: {
        return state
    }}
}



export const reducers = combineReducers({
    base: baseReducer,
    notifications: notificationsReducer,
    session: authReducer,
    bands: bandReducer,
    routing: routerReducer,
    dashboard: dashboardReducer,
    form: formReducer
})

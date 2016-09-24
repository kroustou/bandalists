import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {reducer as formReducer} from 'redux-form'
import {dashboardReducer} from '../../dashboard'
import {authReducer} from '../../auth'
import notificationsReducer from '../../notifications/reducer'
import bandReducer from '../../bands/reducer'
import {LOADING, DONE_LOADING, ADD_MESSAGE, DELETE_MESSAGE} from '../actions'

const baseReducer = (state = {messages: [], loading: false}, action) => {
    switch (action.type) {
    case ADD_MESSAGE: {
        let newMessages = state.messages.slice()
        newMessages.push(action.message)
        return Object.assign({}, state, {messages: newMessages})
    }
    case DELETE_MESSAGE: {
        let newMessages = state.messages.slice()
        newMessages.splice(newMessages.indexOf(action.message), 1)
        return Object.assign({}, state, {messages: newMessages})
    }
    case LOADING: {
        return Object.assign({}, state, {loading: true})
    }
    case DONE_LOADING: {
        return Object.assign({}, state, {loading: false})
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

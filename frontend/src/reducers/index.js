import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {defaultState} from './defaultState'
import { reducer as formReducer } from 'redux-form'
import browserStore from 'store'

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'LOGIN': {
        let token = action.token
        browserStore.set('token', token)
        return Object.assign({}, state, {'authenticated': token})
    }
    case 'LOGOUT': {
        browserStore.remove('token')
        return Object.assign({}, state, {'authenticated': false})
    }
    default: {
        return state
    }}
}

const dashboardReducer = (state = {}, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {'threads': action.data})
    }
    case 'BANDS': {
        return Object.assign({}, state, {'bands': action.bands})
    }
    case 'SELECT_BAND': {
        return Object.assign({}, state, {'selected_band': action.band})
    }
    default: {
        return state
    }}
}


export const reducers = combineReducers({
    session: authReducer,
    routing: routerReducer,
    dashboard: dashboardReducer,
    form: formReducer
})

import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {defaultState} from './defaultState'
import { reducer as formReducer } from 'redux-form'
import browserStore from 'store'

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'LOGIN': {
        let token = 'f828bdf9c9102732c5e1f2b1d8cf9e179fd70dc8'
        browserStore.set('token', token)
        return Object.assign({}, state, {'authenticated': token})
    }
    case 'LOGOUT': {
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

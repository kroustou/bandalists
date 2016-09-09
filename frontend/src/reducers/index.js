import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {defaultState} from './defaultState'

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'LOGIN':
        return Object.assign({}, state, {'authenticated': true})
    case 'LOGOUT':
        return Object.assign({}, state, {'authenticated': false})
    default:
        return state
    }
}

export const reducers = combineReducers({session: authReducer, routing: routerReducer})

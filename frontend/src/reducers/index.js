import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {defaultState} from './defaultState'

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('login')
            return Object.assign({}, state, {'authenticated': true})
        default:
            return state
    }
}

export const reducers = combineReducers({session: authReducer, routing: routerReducer})

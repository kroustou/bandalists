import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {defaultState} from './defaultState'
import browserStore from 'store'

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'LOGIN': {
        let token = 'b5dcf54962d8449c993bbe6ad6a00d1f79c35fe1'
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

export const reducers = combineReducers({session: authReducer, routing: routerReducer})

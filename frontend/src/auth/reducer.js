import {defaultState} from './defaultState'
import browserStore from 'store'

export default (state = defaultState, action) => {
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


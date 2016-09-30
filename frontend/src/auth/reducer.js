import {defaultState} from './defaultState'
import browserStore from 'store'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'LOGIN': {
        let token = action.token
        browserStore.set('token', token)
        return Object.assign({}, state, {'authenticated': token})
    }
    case 'UPDATE_USER_INFO': {
        browserStore.set('info', action.info)
        return Object.assign({}, state, {'info': action.info})
    }
    case 'LOGOUT': {
        browserStore.remove('token')
        browserStore.remove('info')
        return Object.assign({}, state, {authenticated: null, info: null})
    }
    default: {
        return state
    }}
}


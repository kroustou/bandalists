import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'NOTIFICATIONS': {
        return Object.assign({}, state, {notifications: action.notifications})
    }
    default: {
        return state
    }}
}

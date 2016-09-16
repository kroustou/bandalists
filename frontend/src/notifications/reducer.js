import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'NEW_NOTIFICATION': {
        console.log(action.notifications)
        return Object.assign({}, state, {})
    }
    default: {
        return state
    }}
}

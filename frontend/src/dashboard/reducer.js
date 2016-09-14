import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {'threads': action.data})
    }
    case 'THREAD_SAVED': {
        // unused for now
        return state
    }
    case 'THREAD_DELETED': {
        // unused for now
        return state
    }
    default: {
        return state
    }}
}

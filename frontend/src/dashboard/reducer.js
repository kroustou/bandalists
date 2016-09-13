import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {'threads': action.data})
    }
    case 'THREAD_SAVED': {
        // unused for now
        return Object.assign({}, state, {'newestThread': action.data})
    }
    default: {
        return state
    }}
}

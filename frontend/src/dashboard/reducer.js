import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {threads: action.data})
    }
    case 'THREAD_CHANGED': {
        return Object.assign({}, state, {threadChanged: true})
    }
    case 'UPDATE_DONE': {
        return Object.assign({}, state, {threadChanged: null})
    }
    default: {
        return state
    }}
}

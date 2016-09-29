import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {threads: action.data})
    }
    case 'UPDATE_THREADS': {
        let newThreads = Object.assign({}, action.payload, {results: state.threads.results})
        newThreads.results = newThreads.results.concat(action.payload.results)
        return Object.assign({}, state, {threads: newThreads})
    }
    default: {
        return state
    }}
}

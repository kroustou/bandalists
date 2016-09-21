import {defaultState} from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {threads: action.data})
    }
    default: {
        return state
    }}
}

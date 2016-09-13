import {defaultState} from './defaultState'
import browserStore from 'store'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'BANDS': {
        return Object.assign({}, state, {'bands': action.bands})
    }
    case 'SELECT_BAND': {
        browserStore.set('selectedBand', action.band)
        return Object.assign({}, state, {'selectedBand': action.band})
    }
    default: {
        return state
    }}
}

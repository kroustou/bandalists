import {defaultState} from './defaultState'
import browserStore from 'store'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'UPDATE_USER_INFO': {
        return Object.assign({}, state, {bands: {results: action.info.bands}})
    }
    case 'BANDS': {
        return Object.assign({}, state, {bands: action.bands})
    }
    case 'BAND_MEMEBER_SEARCH': {
        return Object.assign({}, state, {memberSearch: action.users})
    }
    case 'REFRESH_SELECTED_BAND': {
        if (state.selectedBand && state.bands) {
            let selected = state.bands.results.find((band) => band.id === state.selectedBand.id)
            // if previously selected band does not exist,
            // select the first available
            if (!selected) {
                if (state.bands.count) {
                    selected = state.bands.results[0]
                } else {
                    // do nothing.
                    return state
                }
            }
            browserStore.set('selectedBand', selected)
            return Object.assign({}, state, {selectedBand: selected})
        } else {
            return Object.assign({}, state)
        }
    }
    case 'SELECT_BAND': {
        browserStore.set('selectedBand', action.band)
        return Object.assign({}, state, {selectedBand: action.band})
    }
    case 'LOGIN': {
        const selectedBand = browserStore.get('selectedBand')
        return Object.assign({}, state, {selectedBand: selectedBand})
    }
    default: {
        return state
    }}
}

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
    case 'BAND_MEMBER_SEARCH': {
        return Object.assign({}, state, {memberSearch: action.users, inviteUser: undefined})
    }
    case 'PROMPT_INVITE': {
        const validateEmail = (email) => {
          let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return re.test(email)
        }

        if (validateEmail(action.user)) {
            return Object.assign({}, state, {inviteUser: action.user})
        } else {
            return state
        }
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
    case 'DESELECT_BAND': {
        return Object.assign({}, state, {selectedBand: null})
    }
    case 'SELECT_BAND': {
        let band
        // we can select a band by given id, or object
        if (!action.band.id) {
            band = state.bands.results.find(band => band.id === action.band)
        } else {
            band = action.band
        }
        browserStore.set('selectedBand', band)
        return Object.assign({}, state, {selectedBand: band})
    }
    case 'LOGIN': {
        const selectedBand = browserStore.get('selectedBand')
        return Object.assign({}, state, {selectedBand: selectedBand})
    }
    default: {
        return state
    }}
}

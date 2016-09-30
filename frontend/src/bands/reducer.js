import {defaultState} from './defaultState'
import browserStore from 'store'
import {SELECT_BAND} from './actions'

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
        let selected = browserStore.get('lastSelectedBand')
        if (selected && state.selectedBand) {
            // we need to see if the state is synced
            selected = state.selectedBand
        }
        if (state.bands && selected) {
            selected = state.bands.results.find((band) => band.id === selected.id)
        } else {
            if (state.bands.count) {
                selected = state.bands.results[0]
            } else {
                return state
            }
        }
        browserStore.set('lastSelectedBand', selected)
        return Object.assign({}, state, {selectedBand: selected})
    }
    case SELECT_BAND: {
        let band
        // we can select a band by given id, or object
        if (!action.band.id) {
            let newSelectedBand = state.bands.results.find(band => band.id === action.band)
            if (newSelectedBand) {
                band = newSelectedBand
            }

        } else {
            band = action.band
        }
        browserStore.set('lastSelectedBand', band)
        return Object.assign({}, state, {selectedBand: band})
    }
    default: {
        return state
    }}
}

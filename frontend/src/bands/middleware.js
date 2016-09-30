import {push} from 'react-router-redux'
import {SELECT_BAND, selectBand} from './actions'
import browserStore from 'store'

export const logger = store => next => action => {
    if (action.type !== SELECT_BAND) {
        let state = store.getState()
        if (state.session.authenticated && state.bands) {
            if (!state.bands.selectedBand) {
                let last = browserStore.get('lastSelectedBand')
                if (last) {
                    store.dispatch(selectBand(state.bands.bands.results.find(band => band.id == last.id)))
                } else {
                    if (state.bands.bands.results.length === 1) {
                        // if one available band select it now
                        store.dispatch(selectBand(state.bands.bands.results[0]))
                    } else {
                        // select manually
                        store.dispatch(push('/profile/'))
                    }
                }
            }
        }
    }
    return next(action)
}

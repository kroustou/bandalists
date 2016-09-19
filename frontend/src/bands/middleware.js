import {selectBand} from './actions'
import {push} from 'react-router-redux'

export const logger = store => next => action => {
    let state = store.getState()
    if (state.bands) {
        if (!state.bands.selectedBand) {
            if (state.bands.bands.length === 1) {
                // if one available band select it now
                store.dispatch(selectedBand(state.bands.bands[0]))
            } else {
                push('/bands/')
            }
        }
    }
    return next(action)
}

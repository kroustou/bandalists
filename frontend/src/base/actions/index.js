import {getBands} from '../../bands/actions'

export const init = (store) => {
    if (store.getState().session.authenticated) {
        getBands(store.dispatch)
    }
}


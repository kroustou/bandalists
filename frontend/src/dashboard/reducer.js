
export default (state = {}, action) => {
    switch (action.type) {
    case 'THREADS': {
        return Object.assign({}, state, {'threads': action.data})
    }
    case 'BANDS': {
        return Object.assign({}, state, {'bands': action.bands})
    }
    case 'SELECT_BAND': {
        return Object.assign({}, state, {'selected_band': action.band})
    }
    default: {
        return state
    }}
}

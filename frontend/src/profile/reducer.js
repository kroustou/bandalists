import defaultState from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'AVATAR_PREVIEW': {
            return Object.assign({}, state, {avatarPreview: action.data})
        }
        case 'CLEAR_AVATAR_PREVIEW': {
            return Object.assign({}, state, {avatarPreview: null})
        }
        default: {
            return state
        }
    }
}

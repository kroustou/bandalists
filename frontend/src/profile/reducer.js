import defaultState from './defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'AVATAR_PREVIEW': {
        return Object.assign({}, state, {avatarPreview: action.data})
    }
    case 'CLEAR_AVATAR_PREVIEW': {
        return Object.assign({}, state, {avatarPreview: null, avatarProgress: null})
    }
    case 'IMAGE_UPLOAD_PROGRESS': {
        return Object.assign({}, state, {avatarProgress: action.value})
    }
    default: {
        return state
    }
    }
}

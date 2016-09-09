import browserStore from 'store'

export const defaultState = {
    'session': {
        'authenticated': browserStore.get('token'),
    }
}

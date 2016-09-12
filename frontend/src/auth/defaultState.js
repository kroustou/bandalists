import browserStore from 'store'

export const defaultState = {
    'authenticated': browserStore.get('token'),
}

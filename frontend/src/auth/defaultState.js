import browserStore from 'store'

export const defaultState = {
    authenticated: browserStore.get('token'),
    info: browserStore.get('info'),
    threads: []
}

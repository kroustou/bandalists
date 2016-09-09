import {api} from '../constants'
export const login = () => {
    return {type: 'LOGIN'}
}

export const logout = () => {
    return {type: 'LOGOUT'}
}

export const getThreads = (dispatch) => {
    api('/threads/').then(resp => {
        dispatch({type: 'THREADS', data: resp.data})
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(resp => {
        dispatch({type: 'THREADS', data: resp.data})
    })
}

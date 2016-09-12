import {api} from '../constants'
export const login = (dispatch) => {
    let data = {username: 'admin', password: 'pass'}
    api('/rest-auth/login/', 'post', data).then(resp => {
        dispatch({type: 'LOGIN', token: resp.data.key})
        init(dispatch)
    })
}

const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
    })
}

export const init = (dispatch) => {
    getBands(dispatch)
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

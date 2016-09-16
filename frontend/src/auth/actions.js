import {api} from '../api'
import {push} from 'react-router-redux'

export const login = (dispatch, data) => {
    api('/rest-auth/login/', 'post', data).then(resp => {
        dispatch(push('/'))
        dispatch({type: 'LOGIN', token: resp.data.key})
        api('/me/').then(resp => {
            dispatch({type: 'UPDATE_USER_INFO', info: resp.data})
        })
    })
}


export const logout = (dispatch) => {
    dispatch(push('/'))
    dispatch({type: 'LOGOUT'})
}


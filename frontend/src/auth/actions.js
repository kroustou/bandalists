import {api} from '../api'
import {init} from '../base/actions'
import {push} from 'react-router-redux'

export const login = (dispatch, data) => {
    api('/rest-auth/login/', 'post', data).then(resp => {
        dispatch({type: 'LOGIN', token: resp.data.key})
        dispatch(push('/'))
    })
}


export const logout = (dispatch) => {
    dispatch({type: 'LOGOUT'})
    dispatch(push('/'))
}


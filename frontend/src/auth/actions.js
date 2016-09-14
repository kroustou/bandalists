import {api} from '../api'
import {init} from '../base/actions'
import {push} from 'react-router-redux'

export const login = (dispatch) => {
    let data = {username: 'admin', password: 'pass'}
    api('/rest-auth/login/', 'post', data).then(resp => {
        dispatch({type: 'LOGIN', token: resp.data.key})
        dispatch(push('/'))
        init(dispatch)
    })
}


export const logout = (dispatch) => {
    dispatch({type: 'LOGOUT'})
    dispatch(push('/'))
}


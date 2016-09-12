import {api} from '../api'
import {init} from '../base/actions'

export const login = (dispatch) => {
    let data = {username: 'admin', password: 'pass'}
    api('/rest-auth/login/', 'post', data).then(resp => {
        dispatch({type: 'LOGIN', token: resp.data.key})
        init(dispatch)
    })
}


export const logout = () => {
    return {type: 'LOGOUT'}
}

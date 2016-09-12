import {api} from '../constants'
import {getBands} from '../dashboard/actions'

export const login = (dispatch) => {
    let data = {username: 'admin', password: 'pass'}
    api('/rest-auth/login/', 'post', data).then(resp => {
        dispatch({type: 'LOGIN', token: resp.data.key})
        init(dispatch)
    })
}


export const init = (dispatch) => {
    getBands(dispatch)
}


export const logout = () => {
    return {type: 'LOGOUT'}
}


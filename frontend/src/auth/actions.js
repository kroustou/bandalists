import {api} from '../api'
import {replace} from 'react-router-redux'
import {closeSocket} from '../base/actions'
import {init} from '../base/actions'

export const getUserInfo = (dispatch, next) => {
    return api('/me/').then(resp => {
        dispatch({type: 'CLEAR_AVATAR_PREVIEW'})
        console.log('asd')
        dispatch({type: 'UPDATE_USER_INFO', info: resp.data})
        dispatch({type: 'REFRESH_SELECTED_BAND'})
        if (next) {
            dispatch(replace(next))
        }
    })
}

export const login = (dispatch, token, next) => {
    dispatch({type: 'LOGIN', token: token})
    init(dispatch, next)
}


export const logout = (dispatch) => {
    dispatch({type: 'LOGOUT'})
    dispatch(replace('/'))
    closeSocket()
}

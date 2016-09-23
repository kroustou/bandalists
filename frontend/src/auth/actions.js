import {api} from '../api'
import {push} from 'react-router-redux'
import {closeSocket} from '../base/actions'

export const getUserInfo = (dispatch) => {
    api('/me/').then(resp => {
        dispatch({type: 'UPDATE_USER_INFO', info: resp.data})
    })
}


export const logout = (dispatch) => {
    dispatch(push('/'))
    dispatch({type: 'LOGOUT'})
    closeSocket()
}


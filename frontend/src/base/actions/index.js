import {getNotifications} from '../../notifications/actions'
import browserStore from 'store'
import {getThreads} from '../../dashboard/actions'
import {getBands} from '../../bands/actions'
import {getUserInfo} from '../../auth/actions'
import {getSocket} from '../socket'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const LOADING = 'LOADING'
export const DONE_LOADING = 'DONE_LOADING'


export var socket = false

export const handleMessage = (dispatch, msg) => {
    let message = JSON.parse(msg)
    if (message.notification_type === 'thread') {
        getThreads(dispatch, message.dashboard)
        getNotifications(dispatch)
        if (message.message) {
            createMessage(dispatch, message)
        }
    } else if (message.notification_type === 'update_bands') {
        getBands(dispatch)
        getThreads(dispatch, message.dashboard)
        getNotifications(dispatch)
        createMessage(dispatch, message)
    }
}

export const createMessage = (dispatch, msg) => {
    dispatch({type: ADD_MESSAGE, message: msg})
    setTimeout(() => {
        dispatch({type: DELETE_MESSAGE, message: msg})
    }, 5000)
}

export const closeSocket = () => {
    socket = getSocket(socket)
    socket.close()
}

export const init = (dispatch) => {
    if (browserStore.get('token')) {
        if (!socket) {
            socket = getSocket(socket, dispatch)
        }
        getBands(dispatch)
        getNotifications(dispatch)
        getUserInfo(dispatch)
    }
}



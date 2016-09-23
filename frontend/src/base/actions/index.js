import {getNotifications} from '../../notifications/actions'
import browserStore from 'store'
import {getThreads} from '../../dashboard/actions'
import {getBands} from '../../bands/actions'
import {getUserInfo} from '../../auth/actions'
import {getSocket} from '../socket'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export var socket = getSocket()

export const handleMessage = (dispatch, msg) => {
    let message = JSON.parse(msg)
    if (message.notification_type === 'thread') {
        getThreads(dispatch, message.dashboard)
        if (message.message) {
            createMessage(dispatch, message)
        }
    } else if (message.notification_type === 'update_bands') {
        getBands(dispatch)
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
            socket = getSocket(socket)
        }
        getBands(dispatch)
        getNotifications(dispatch)
        getUserInfo(dispatch)
    }
}



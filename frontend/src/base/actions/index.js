import {getNotifications} from '../../notifications/actions'
import browserStore from 'store'
import {getThreads} from '../../dashboard/actions'
import {getBands} from '../../bands/actions'
import {getUserInfo} from '../../auth/actions'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

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


export const socket = new WebSocket('ws://localhost:8000/?token=' + browserStore.get('token'))


export const init = (dispatch) => {
    if (socket) {
        getBands(dispatch)
        getNotifications(dispatch)
        getUserInfo(dispatch)

        socket.onerror = (e) => {
            console.log(e)
            createMessage(dispatch, 'Could not connect to websocket')
        }

        socket.onmessage = (e) => {
            handleMessage(dispatch, e.data)
        }
    }
}



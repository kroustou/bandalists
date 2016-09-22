import {getNotifications} from '../../notifications/actions'
import browserStore from 'store'
import {getThreads} from '../../dashboard/actions'
import {getBands} from '../../bands/actions'

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
    getBands(dispatch)
    getNotifications(dispatch)

    socket.onmessage = (e) => {
        handleMessage(dispatch, e.data)
    }
}



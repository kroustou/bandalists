import {getNotifications} from '../../notifications/actions'
import browserStore from 'store'
import {getThreads} from '../../dashboard/actions'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const handleMessage = (dispatch, msg) => {
    let message = JSON.parse(msg)
    if (message.notification_type === 'thread') {
        console.log('getting ', message)
        getThreads(dispatch, message.dashboard)
        if (message.message) {
            createMessage(dispatch, message)
        }
    } else if (false) {

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
    getNotifications(dispatch)

    socket.onmessage = (e) => {
        handleMessage(dispatch, e.data)
    }
}



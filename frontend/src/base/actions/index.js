import {getNotifications} from '../../notifications/actions'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'


export const createMessage = (dispatch, msg) => {
    dispatch({type: ADD_MESSAGE, message: msg})
    setTimeout(() => {
        dispatch({type: DELETE_MESSAGE, message: msg})
    }, 5000)
}


export const init = (dispatch) => {
    getNotifications(dispatch)
    let socket = new WebSocket("ws://localhost:8000/");
    socket.onmessage = (e) => {
        getNotifications(dispatch)
        createMessage(dispatch, e.data)
    }
}



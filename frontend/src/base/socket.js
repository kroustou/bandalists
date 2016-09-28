import {createMessage, handleMessage} from './actions'
import browserStore from 'store'

// connect if logged in
export const getSocket = (socket, dispatch) => {
    if (browserStore.get('token')) {
        if (!socket) {
            socket = new WebSocket('ws://localhost:8000/?token=' + browserStore.get('token'))
            socket.onerror = (e) => {
                createMessage(dispatch, 'Could not connect to websocket: ' + e)
            }

            socket.onmessage = (e) => {
                handleMessage(dispatch, e.data)
            }
        }
    }
    return socket
}


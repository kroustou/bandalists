import {api} from '../api'

export const getNotifications = (dispatch) => {
    api('notifications/').then(resp => {
        console.log(resp)
        dispatch({type: 'NOTIFICATIONS', notifications: resp})
    })
}

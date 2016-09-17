import {api} from '../api'
import { push } from 'react-router-redux'
import {selectBand} from '../bands/actions'

export const getNotifications = (dispatch) => {
    api('notifications/').then(resp => {
        dispatch({type: 'NOTIFICATIONS', notifications: resp.data})
    })
}

export const markRead = (dispatch, notificationId) => {
    api('notifications/' + notificationId + '/', 'put', {read: true}).then(resp => {
        getNotifications(dispatch)
    })
}


export const goToNotification = (dispatch, notification) => {
    if (notification.notification_type === 'Thread') {
        const message = JSON.parse(notification.message)
        let id
        if (message.parent) {
            id = message.parent
        } else {
            id = message.id
        }
        dispatch(selectBand(notification.dashboard))
        console.log('selected band', notification.dashboard)
        dispatch(push('/dashboard/thread/' + id + '/'))
    }
    // markRead(dispatch, notification.id)
}

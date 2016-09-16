import {api} from '../api'

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
    console.log('should redirect to notification: ', notification)
    markRead(dispatch, notification.id)
}

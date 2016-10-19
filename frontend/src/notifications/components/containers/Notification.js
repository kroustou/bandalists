import React from 'react'
import Thread from './types/Thread'

const RenderNotification = ({notification}) => {
    if (notification.notification_type === 'thread') {
        let message = JSON.parse(notification.message)
        return (
            <Thread message={message}/>
        )
    } else if (notification.notification_type === 'update_bands') {
        let message
        if (notification.message) {
            message = JSON.parse(notification.message).message
        } else {
            message = 'Band has been updated'
        }
        return <div>{message}</div>
    } else {
        return <div>{notification}</div>
    }

}

export default ({notification, goToNotification}) => {
    return (
        <li className={notification.read ? 'read': 'unread'} key={notification.id} onClick={() => {
            return goToNotification(notification)
        }}>
            <RenderNotification notification={notification}/>
        </li>
    )
}



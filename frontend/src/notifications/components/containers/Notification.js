import React from 'react'
import moment from 'moment/moment'


const RenderNotification = ({notification}) => {
    if (notification.notification_type === 'thread') {
        let message = JSON.parse(notification.message)
        return (
            <div>
                New {message.parent ? 'reply' : 'post'}  from {message.author}: {message.text}
                <span className="date">{moment.unix(message.last_edit).fromNow()}</span>
            </div>
        )
    } else if (notification.notification_type === 'update_bands') {
        return <div>One of your bands settings have been changed!</div>
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



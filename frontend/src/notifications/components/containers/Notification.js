import React from 'react'
import moment from 'moment/moment'

export default ({notification, goToNotification}) => {
    let message = JSON.parse(notification.message)
    return (
        <li className={notification.read ? 'read': 'unread'} key={notification.id} onClick={() => {
            return goToNotification(notification)
        }}>
            New {message.parent ? 'reply' : 'post'}  from {message.author}: {message.text}
            <span className="date">{moment.unix(message.last_edit).fromNow()}</span>
        </li>
    )
}

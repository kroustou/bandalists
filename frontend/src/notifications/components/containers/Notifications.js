import React from 'react'
import moment from 'moment/moment'

export default ({notifications, goToNotification}) => {
    let newNotifications = notifications.results.filter(notification => !notification.read).length
    return (
        <li className='two columns'>
            <span className={ newNotifications ? 'on' : ''}> {newNotifications} Notification{newNotifications !== 1 ? 's': ''} </span>
            <ul className='notifications'>
            {
                notifications.results.map(notification => {
                    let message = JSON.parse(notification.message)
                    return <li className={notification.read ? 'read': 'unread'} key={notification.id} onClick={() => goToNotification(notification)}>
                        New {message.parent ? 'reply' : 'post'}  from {message.author}: {message.text}
                        <span className="date">{moment.unix(message.last_edit).fromNow()}</span>
                    </li>
                })
            }
            </ul>
        </li>
    )
}

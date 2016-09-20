import React from 'react'
import Notification from './Notification'

export default ({notifications, goToNotification}) => {
    let newNotifications = notifications.results.filter(notification => !notification.read).length
    return (
        <li className='two columns'>
            <span className={ newNotifications ? 'on' : ''}> {newNotifications} Notification{newNotifications !== 1 ? 's': ''} </span>
            <ul className='notifications'>
                {notifications.results.map(notification => <Notification key={notification.id} notification={notification} goToNotification={goToNotification}/>)}
            </ul>
        </li>
    )
}

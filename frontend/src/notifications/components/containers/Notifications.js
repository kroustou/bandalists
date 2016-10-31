import React from 'react'
import Notification from './Notification'

export default ({notifications, goToNotification}) => {
    let newNotifications = notifications.results.filter(notification => !notification.read).length
    return (
        <li className=''>
            <span className={ newNotifications ? 'on' : ''}> {newNotifications} <i className="fa fa-bell-o" aria-hidden="true"></i></span>
            <ul className='notifications'>
                {notifications.results.map(notification => <Notification key={notification.id} notification={notification} goToNotification={goToNotification}/>)}
            </ul>
        </li>
    )
}

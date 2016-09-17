import React from 'react'

export default ({notifications, goToNotification}) => {
    return (
        <li className='two columns'>
            <span>{notifications.results.filter(notification => !notification.read).length} Notifications</span>
            <ul>
            {
                notifications.results.filter(notification=>!notification.read).map(notification => {
                    let message = JSON.parse(notification.message)
                    return <li className={notification.read ? 'read': ''} key={notification.id} onClick={() => goToNotification(notification)}>{message.text}</li>
                })
            }
            </ul>
        </li>
    )
}

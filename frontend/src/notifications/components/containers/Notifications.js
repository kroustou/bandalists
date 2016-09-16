import React from 'react'

export default ({notifications, getNotifications, markRead}) => {
    return (
        <div className='notifications'>
            <h3>{notifications.results.filter(notification => !notification.read).length} Notifications</h3>
            <ul>
            {
                notifications.results.map(notification => {
                    let message = JSON.parse(notification.message)
                    return <li className={notification.read ? 'read': ''} key={notification.id} onClick={() => markRead(notification.id)}>{message.text}</li>
                })
            }
            </ul>
        </div>
    )
}

import React from 'react'
import moment from 'moment/moment'
import Avatar from  '../../../profile/components/containers/Avatar'

const RenderNotification = ({notification}) => {
    if (notification.notification_type === 'thread') {
        let message = JSON.parse(notification.message)
        return (
            <div className="row">
                <div className="row">
                    <div className="two columns">
                        <Avatar img={message.author.avatar} />
                    </div>
                    <div className="ten columns">
                        New {message.parent ? 'reply' : 'post'} from {message.author.username}
                    </div>
                </div>
                <div className="row">{message.text}</div>
                <span className="date">{moment.unix(message.last_edit).fromNow()}</span>
            </div>
        )
    } else if (notification.notification_type === 'update_bands') {
        return <div>One of your bands settings have been changed!</div>
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



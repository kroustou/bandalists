import NotificationsContainer from './containers/Notifications'
import {connect} from 'react-redux'
import {getNotifications, markRead} from '../actions'

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: () => {
            getNotifications(dispatch)
        },
        markRead: (notificationId) => {
            markRead(dispatch, notificationId)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)

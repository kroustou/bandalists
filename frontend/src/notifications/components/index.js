import NotificationsContainer from './containers/Notifications'
import {connect} from 'react-redux'
import {getNotifications, goToNotification} from '../actions'

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
        goToNotification: (notification) => {
            goToNotification(dispatch, notification)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)

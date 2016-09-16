import NotificationsContainer from './containers/Notifications'
import {connect} from 'react-redux'
import {getNotifications} from '../actions'

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: () => {
            getNotifications(dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)

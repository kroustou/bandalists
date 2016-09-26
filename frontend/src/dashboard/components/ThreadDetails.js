import ThreadDetailsContainer from './containers/ThreadDetails'
import {connect} from 'react-redux'

import {deleteThread} from '../actions'

const mapStateToProps = (state) => {
    return {
        user: state.session.info,
        threadUpdated: state.dashboard.threadChanged,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => {
            deleteThread(dispatch, postId)
        }
    }
}

const ThreadDetails = connect(mapStateToProps, mapDispatchToProps)(ThreadDetailsContainer)
export default ThreadDetails

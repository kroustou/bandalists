import ThreadDetailsContainer from './containers/ThreadDetails'
import {connect} from 'react-redux'
import {getThreads, deleteThread} from '../actions'

const mapStateToProps = (state, props) => {
    let currentThread = null
    if (state.dashboard.threads) {
        currentThread = state.dashboard.threads.results.find(thread => thread.id === parseInt(props.params.id, 10))
    }
    return {
        user: state.session.info,
        currentThread: currentThread,
        dashboard: state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => {
            deleteThread(dispatch, postId)
        },
        getPosts: (dashboardId) => {
            getThreads(dispatch, dashboardId)
        },
    }
}

const ThreadDetails = connect(mapStateToProps, mapDispatchToProps)(ThreadDetailsContainer)
export default ThreadDetails

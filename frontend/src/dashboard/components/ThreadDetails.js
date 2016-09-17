import ThreadDetailsContainer from './containers/ThreadDetails'
import {connect} from 'react-redux'

import {deleteThread, updateDone} from '../actions'

const mapStateToProps = (state, props) => {
    return {
        user: state.session.info,
        threadUpdated: state.dashboard.threadChanged,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => {
            deleteThread(dispatch, postId)
        },
        updateDone: () => {
            dispatch(updateDone())
        }
    }
}

const ThreadDetails = connect(mapStateToProps, mapDispatchToProps)(ThreadDetailsContainer)
export default ThreadDetails

import ThreadDetailsContainer from './containers/ThreadDetails'
import {connect} from 'react-redux'

import {deleteThread} from '../actions'

const mapStateToProps = (state, props) => {
    let response = {
        user: state.session.info,
    }
    if (state.form['postForm_' + props.params.id]) {
        response.submitted = state.form['postForm_' + props.params.id].submitSucceeded
    }
    return response
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

import {connect} from 'react-redux'
import PostsContainer from './containers/Posts'
import {getThreads, deleteThread} from '../actions'

const mapStateToProps = (state) => {
    return {
        user: state.session.info,
        threads: state.dashboard.threads,
        selectedBand: state.bands.selectedBand,
        initialValues: {text: ''},
        loading: state.base.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (dashboardId, threads) => {
            getThreads(dispatch, dashboardId)
        },
        deletePost: (postId) => {
            deleteThread(dispatch, postId)
        }
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
export default Posts

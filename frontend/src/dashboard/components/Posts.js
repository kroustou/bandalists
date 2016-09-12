import {connect} from 'react-redux'
import PostsContainer from './containers/Posts'
import {getThreads} from '../actions'

const mapStateToProps = (state) => {
    return {
        threads: state.dashboard.threads,
        selectedBand: state.dashboard.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (dashboardId) => {
            getThreads(dispatch, dashboardId)
        }
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
export default Posts

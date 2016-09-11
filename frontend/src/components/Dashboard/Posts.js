import {connect} from 'react-redux'
import PostsContainer from '../../containers/dashboard/Posts'
import {getThreads} from '../../actions'

const mapStateToProps = (state) => {
    return {
        threads: state.dashboard.threads
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            return getThreads(dispatch)
        }
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
export default Posts





import {connect} from 'react-redux'
import PostFormContainer from './containers/Form'
import {postThread} from '../actions'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            // could have parent
            data.parent = 'lala'
            // shoudl have dashboard
            data.dashoard = 'koko'
            postThread(data, dispatch)
        }
    }
}

const PostForm = connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
export default PostForm

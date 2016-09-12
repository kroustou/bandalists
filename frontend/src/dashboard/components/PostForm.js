import {connect} from 'react-redux'
import PostFormContainer from './containers/Form'
import {postThread} from '../actions'
import {reset} from 'redux-form'

const mapStateToProps = (state) => {
    return {
        selectedBand: state.dashboard.selectedBand,
        initialValues: {dashboard: state.dashboard.selectedBand.pk}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            // could have parent
            postThread(data, dispatch)
            dispatch(reset('postForm'))
        }
    }
}

const PostForm = connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
export default PostForm

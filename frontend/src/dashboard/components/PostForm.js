import {connect} from 'react-redux'
import PostFormContainer from './containers/Form'
import {postThread} from '../actions'

const mapStateToProps = (state) => {
    return {
        'selectedBand': state.dashboard.selectedBand,
        'initialValues': {dashboard: state.dashboard.selectedBand.pk}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            // could have parent
            postThread(data, dispatch)
        }
    }
}

const PostForm = connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
export default PostForm

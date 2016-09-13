import {connect} from 'react-redux'
import PostFormContainer from './containers/Form'
import {postThread} from '../actions'
import {reset} from 'redux-form'

const mapStateToProps = (state) => {
    return {
        selectedBand: state.dashboard.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            let formName = 'postForm'
            data.parent ? formName += '_' + data.parent : ''
            // could have parent
            postThread(data, dispatch)
            dispatch(reset(formName))
        }
    }
}

const PostForm = connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
export default PostForm

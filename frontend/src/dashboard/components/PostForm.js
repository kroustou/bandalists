import {connect} from 'react-redux'
import PostFormContainer from './containers/Form'
import {postThread} from '../actions'

const mapStateToProps = (state) => {
    return {
        selectedBand: state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            let formName = 'postForm'
            data.parent ? formName += '_' + data.parent : ''
            // could have parent
            postThread(dispatch, data, formName)
        }
    }
}

const PostForm = connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
export default PostForm

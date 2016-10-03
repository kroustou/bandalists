import EditProfileContainer from './containers/EditProfile'
import {connect} from 'react-redux'
import {api} from '../../api'
import {getUserInfo} from '../../auth/actions'
import {SubmissionError} from 'redux-form'

const mapStateToProps = (state) => {
    return {
        user: state.session.info,
        initialValues: state.session.info,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch({type: 'LOADING'})
            return api('/me/', 'put', data)
                .then(() => {
                    // in case the request was valid
                    dispatch({type: 'DONE_LOADING'})
                    getUserInfo(dispatch)

                })
                .catch(e => {
                    dispatch({type: 'DONE_LOADING'})
                    if (e.response.status === 400) {
                        let errors = {...e.response.data}
                        if (e.response.data.non_field_errors) {
                            errors._error = e.response.data.non_field_errors
                            delete errors.non_field_errors
                        }
                        throw new SubmissionError(errors)
                    } else {
                        dispatch({type: 'REQUEST_ERROR', error: e})
                    }
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer)

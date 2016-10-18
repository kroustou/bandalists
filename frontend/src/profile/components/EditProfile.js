import EditProfileContainer from './containers/EditProfile'
import {connect} from 'react-redux'
import {api} from '../../api'
import {getUserInfo} from '../../auth/actions'
import {SubmissionError} from 'redux-form'
import {createMessage} from '../../base/actions'
import {logout} from '../../auth/actions'
import {replace} from 'react-router-redux'

const mapStateToProps = (state) => {
    // we have to create a new object without the avatar
    // because we have to avoid sending stupid data to the server
    const {avatar, ...infoWithoutAvatar} = state.session.info;
    return {
        user: state.session.info,
        initialValues: infoWithoutAvatar
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
                    createMessage(dispatch, 'Data updated!')
                    if (data.password) {
                        logout(dispatch)
                    }
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

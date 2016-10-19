import {connect} from 'react-redux'
import SignUpContainer from './containers/SignUp'
import {withRouter} from 'react-router'
import {api} from '../../api'
import {SubmissionError} from 'redux-form'
import {login} from '../actions'

const mapStateToProps = (state, props) => {
    return {
        authenticated: state.session.authenticated,
        signup: true,
        initialValues: {
            token: props.location.query.token,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            console.log(data)
            dispatch({type: 'LOADING'})
            let nextRoute = data.next
            return api('/me/', 'post', data)
                .then(resp => {
                    // in case the login was valid
                    dispatch({type: 'DONE_LOADING'})
                    login(dispatch, resp.data.key, '/profile/')
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpContainer))

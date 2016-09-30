import {connect} from 'react-redux'
import LoginContainer from './containers'
import {withRouter} from 'react-router'
import {api} from '../../api'
import {SubmissionError} from 'redux-form'
import {login} from '../actions'

const mapStateToProps = (state, props) => {
    return {
        authenticated: state.session.authenticated,
        initialValues: {
            next: props.location.state ? props.location.state.nextPathname : '/dashboard/',
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch({type: 'LOADING'})
            let nextRoute = data.next
            return api('/rest-auth/login/', 'post', data)
                .then(resp => {
                    // in case the login was valid
                    dispatch({type: 'DONE_LOADING'})
                    login(dispatch, resp.data.key, nextRoute)

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))

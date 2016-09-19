import {connect} from 'react-redux'
import LoginContainer from './containers'
import {login} from '../actions'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) => {
    return {
        authenticated: state.session.authenticated,
        initialValues: {
            next: props.location.state ? props.location.state.nextPathname : '/',
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            login(dispatch, data)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))

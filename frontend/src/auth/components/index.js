import {connect} from 'react-redux'
import LoginContainer from './containers'
import {login} from '../actions'

const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            login(dispatch)
        }
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default Login

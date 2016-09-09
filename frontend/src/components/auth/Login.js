import {connect} from 'react-redux'
import LoginContainer from '../../containers/auth/Login'
import {login} from '../../actions'

const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login())
        }
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default Login

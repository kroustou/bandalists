import {connect} from 'react-redux'
import LoginContainer from '../../containers/auth/Login'
import {login as loginAction} from '../../actions'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: loginAction()
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default Login

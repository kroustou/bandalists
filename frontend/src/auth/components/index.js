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
        onSubmit: (data) => {
            login(dispatch, data)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

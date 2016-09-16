import {connect} from 'react-redux'
import AppContainer from './containers/App'


const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated,
        message: state.base.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer)
export default App

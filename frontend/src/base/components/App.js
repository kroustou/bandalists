import {connect} from 'react-redux'
import AppContainer from './containers/App'


const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated,
        messages: state.base.messages,
        loading: state.base.loading,
        notifications: state.notifications.notifications,
        selectedBand: state.bands.selectedBand,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer)
export default App

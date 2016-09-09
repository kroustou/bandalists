import {connect} from 'react-redux'
import AppContainer from '../containers/App'


const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

const App = connect(mapStateToProps, {})(AppContainer)
export default App

import {connect} from 'react-redux'
import MenuContainer from './containers/header/menu/Menu'
import {logout} from '../../auth/actions'

const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated,
        user: state.session.info,
        selectedBand: state.bands.selectedBand,
        notifications: state.notifications.notifications.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            logout(dispatch)
        }
    }
}


// without pure: false we cant
// update the active menu item
const Menu = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(MenuContainer)
export default Menu

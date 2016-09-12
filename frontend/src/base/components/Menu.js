import {connect} from 'react-redux'
import MenuContainer from './containers/header/menu/Menu'
import {logout} from '../actions'


const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
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

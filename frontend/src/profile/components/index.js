import ProfileContainer from './containers/Profile'
import {connect} from 'react-redux'
import {logout} from '../../auth/actions'

const mapStateToProps = (state) => {
    return {
        user: state.session.info,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            logout(dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

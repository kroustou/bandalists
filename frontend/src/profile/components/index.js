import ProfileContainer from './containers/Profile'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        user: state.session.info,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

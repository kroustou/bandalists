import EditProfileContainer from './containers/EditProfile'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        user: state.session.info,
        initialValues: state.session.info,
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer)

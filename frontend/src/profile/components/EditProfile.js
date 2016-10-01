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
        onSubmit: (data) => {
            console.log(data)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer)

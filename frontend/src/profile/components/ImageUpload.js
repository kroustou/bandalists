import {connect} from 'react-redux'
import ImageUpload from './containers/ImageUpload'
import {api} from '../../api'

const mapStateToProps = (state) => {
    return {
        avatarPreview: state.myProfile.avatarPreview,
        user: state.session.info,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: e => {
            e.preventDefault()
            let reader = new FileReader()
            let file = e.target.files[0]
            reader.onloadend = () => {
                dispatch({type: 'AVATAR_PREVIEW', data: reader.result})
            }
            reader.readAsDataURL(file)
            let data = new FormData()
            data.append('avatar', file)
            api('/me/', 'put', data)
                .then(function (res) {
                    console.log(res)
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageUpload)

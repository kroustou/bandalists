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
            let config = {
                onUploadProgress: function(progressEvent) {
                    console.log(progressEvent.loaded / progressEvent.total)
                }
            }
            dispatch({type: 'LOADING'})
            api('/me/', 'put', data, config)
                .then(function (res) {
                    console.log(res)
                    dispatch({type: 'DONE_LOADING'})
                })
                .catch(function (err) {
                    dispatch({type: 'DONE_LOADING'})
                    dispatch({type: 'REQUEST_ERROR', error: err})

                })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageUpload)

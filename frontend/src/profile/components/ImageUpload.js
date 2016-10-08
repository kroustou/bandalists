import {connect} from 'react-redux'
import ImageUpload from './containers/ImageUpload'
import {api} from '../../api'
import {getUserInfo} from '../../auth/actions'

const mapStateToProps = (state, props) => {
    return {
        avatarPreview: state.myProfile.avatarPreview,
        user: state.session.info,
        band: props.band,
        progress: state.myProfile.avatarProgress || 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e, url) => {
            e.preventDefault()
            dispatch({type: 'CLEAR_AVATAR_PREVIEW'})

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
                    dispatch({type:'IMAGE_UPLOAD_PROGRESS', value: progressEvent.loaded / progressEvent.total * 100})
                }
            }
            dispatch({type: 'LOADING'})
            api(url, 'put', data, config)
                .then(function (res) {
                    dispatch({type: 'DONE_LOADING'})
                    getUserInfo(dispatch)
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

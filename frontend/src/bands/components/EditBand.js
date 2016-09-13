import BandForm from './containers/BandForm'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {editBand} from '../actions'

const mapStateToProps = (state) => {
    if (state.bands.bands) {
        return {
            bands: state.bands.bands.results
        }
    } else {
        return {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            editBand(dispatch, data)
            dispatch(reset('editBand'))
        }
    }
}

const EditBand = connect(mapStateToProps, mapDispatchToProps)(BandForm)
export default EditBand

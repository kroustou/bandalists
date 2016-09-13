import BandForm from './containers/BandForm'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {editBand} from '../actions'

const mapStateToProps = (state, {params: {bandSlug}}) => {
    let band = state.bands.bands.results.find(band => band.slug === bandSlug)
    return {
        form: 'editBand_' + bandSlug,
        initialValues: band
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(reset('editBand_' + data.slug))
            editBand(dispatch, data)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandForm)

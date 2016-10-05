import BandForm from './containers/BandForm'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {editBand} from '../actions'
import {push} from 'react-router-redux'

const mapStateToProps = (state, {params: {bandSlug}}) => {
    const band = state.bands.bands.results.find(band => band.slug === bandSlug)
    return {
        form: 'editBand_' + bandSlug,
        band: band,
        initialValues: {
            ...band
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(reset('editBand_' + data.slug))
            editBand(dispatch, data)
            dispatch(push('/bands/'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandForm)

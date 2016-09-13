import {connect} from 'react-redux'
import BandContainer from './containers/Band'
import {deleteBand, selectBand} from '../actions'

const mapStateToProps = (state) => {
    return {
        'bands': state.bands.bands,
        'selectedBand': state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectBand: (band) => dispatch(selectBand(band)),
        deleteBand: (band) => {
            deleteBand(dispatch, band)
        },
    }
}

const Band = connect(mapStateToProps, mapDispatchToProps)(BandContainer)
export default Band


import {connect} from 'react-redux'
import BandSelectorContainer from './containers/BandSelector'
import {selectBand} from '../actions'

const mapStateToProps = (state) => {
    return {
        bands: state.bands.bands,
        selectedBand: state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectBand: (band) => selectBand(dispatch, band)
    }
}

const BandSelector = connect(mapStateToProps, mapDispatchToProps)(BandSelectorContainer)
export default BandSelector

import {connect} from 'react-redux'
import BandSelectorContainer from './containers/BandSelector'

const mapStateToProps = (state) => {
    return {
        bands: state.bands.bands,
        selectedBand: state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectBand: (band) => dispatch({'type': 'SELECT_BAND', 'band': band})
    }
}

const BandSelector = connect(mapStateToProps, mapDispatchToProps)(BandSelectorContainer)
export default BandSelector

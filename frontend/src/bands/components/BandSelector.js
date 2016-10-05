import {connect} from 'react-redux'
import BandSelectorContainer from './containers/BandSelector'
import {selectBand} from '../actions'
import {push} from 'react-router-redux'

const mapStateToProps = (state) => {
    return {
        bands: state.bands.bands,
        selectedBand: state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectBand: (band) => {
            selectBand(dispatch, band)
            dispatch(push('/'))
        }
    }
}

const BandSelector = connect(mapStateToProps, mapDispatchToProps)(BandSelectorContainer)
export default BandSelector

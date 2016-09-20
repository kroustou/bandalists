import {connect} from 'react-redux'
import BandBlockContainer from './containers/BandBlock'
import {selectBand} from '../../bands/actions'

const mapStateToProps = (state) => {
    return {
        band: state.bands.selectedBand,
        selectedBand: state.bands.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandBlockContainer)

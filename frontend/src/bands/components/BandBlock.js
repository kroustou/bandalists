import {connect} from 'react-redux'
import BandBlockContainer from './containers/BandBlock'

const mapStateToProps = (state) => {
    return {
        band: state.bands.selectedBand,
        selectedBand: state.bands.selectedBand
    }
}


export default connect(mapStateToProps, {})(BandBlockContainer)

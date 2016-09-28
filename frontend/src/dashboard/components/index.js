import {connect} from 'react-redux'
import {Dashboard as DashboardContainer} from './containers'

const mapStateToProps = (state) => {

    return {
        band: state.bands.selectedBand
    }
}

export default connect(mapStateToProps)(DashboardContainer)

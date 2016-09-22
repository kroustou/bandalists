import {connect} from 'react-redux'
import {Dashboard as DashboardContainer} from './containers'
import {getThreads} from '../actions'

const mapStateToProps = (state) => {

    return {
        band: state.bands.selectedBand
    }
}

export default connect(mapStateToProps)(DashboardContainer)

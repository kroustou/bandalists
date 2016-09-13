import {connect} from 'react-redux'
import {Dashboard as DashboardContainer} from './containers'
import {getThreads} from '../actions'

const mapStateToProps = (state) => {
    return {
        threads: state.dashboard.threads,
        selectedBand: state.dashboard.selectedBand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            return getThreads(dispatch)
        }
    }
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
export default Dashboard

import BandBlockContainer from './containers/BandBlock'
import {leaveBand} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
        band: props.band,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        leaveBand: (bandId) => {
            leaveBand(dispatch, bandId)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandBlockContainer)


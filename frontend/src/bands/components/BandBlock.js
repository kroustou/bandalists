import BandBlockContainer from './containers/BandBlock'
import {leaveBand} from '../actions'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const mapStateToProps = (state, props) => {
    return {
        band: props.band,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        leaveBand: (bandId) => {
            leaveBand(dispatch, bandId)
            dispatch(push('/'))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandBlockContainer)


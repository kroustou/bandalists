import {connect} from 'react-redux'
import BandMembersContainer from './containers/BandMembers'
import {searchForUser, leaveBand} from '../actions'

const mapStateToProps = (state) => {
    return {
        memberSearch: state.bands.memberSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchUser: (e) => {
            searchForUser(dispatch, e.target.value)
        },
        leaveBand: (bandId) => {
            leaveBand(dispatch, bandId)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandMembersContainer)

import {connect} from 'react-redux'
import BandMembersContainer from './containers/BandMembers'
import {searchForUser} from '../actions'

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchUser: (e) => {
            console.log(e.target.value)
            searchForUser(dispatch, e.target.value)
        },
        leaveBand: (bandId) => {
            // we need to know our user id first
            console.log(bandId)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandMembersContainer)

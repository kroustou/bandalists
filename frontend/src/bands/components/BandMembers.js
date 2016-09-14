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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandMembersContainer)

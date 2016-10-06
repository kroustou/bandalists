import {connect} from 'react-redux'
import BandMembersContainer from './containers/BandMembers'
import {invite, searchForUser, addMember} from '../actions'
import {push} from 'react-router-redux'

const mapStateToProps = (state) => {
    return {
        memberSearch: state.bands.memberSearch,
        inviteUser: state.bands.inviteUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchUser: (e, bandSlug) => {
            searchForUser(dispatch, e.target.value, bandSlug)
        },
        addMember: (bandSlug, memberId) => {
            addMember(dispatch, bandSlug, memberId)
            document.getElementById('member_search').reset()
        },
        invite: (userEmail, bandSlug) => {
            invite(dispatch, userEmail, bandSlug)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandMembersContainer)

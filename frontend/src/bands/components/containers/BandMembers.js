import React from 'react'
import Avatar from '../../../profile/components/containers/Avatar'

export default ({band, searchUser, leaveBand, memberSearch, addMember, inviteUser, invite}) => {
    return (
        <div className="band-members columns">
            <h5 className="row">Members</h5>
            <ul className="row members">
                {band.members.map(member => <li className="three columns member" key={member.id}> {member.avatar ? <div className="two columns"><Avatar img={member.avatar}/></div> : ''} <div className="ten columns">{member.username}</div></li>)}
            </ul>
            <div className="row">
                <form id='member_search' className="row" autoComplete="off">
                    <input className="columns" type="text" onChange={(e) => searchUser(e, band.slug)} name="user" id="" placeholder="Search for username or email to add to band"/>
                </form>
                <ul className="row">
                    {memberSearch.map(user => (
                        <li onClick={() => {
                            addMember(band.slug, user.id)
                        }} key={user.id}><i className="fa fa-user-plus" aria-hidden="true"></i> {user.username}</li>
                    ))}
                </ul>
                {inviteUser ? <input type="button" name="invite" onClick={() => {invite(inviteUser, band.slug)}} value={`Invite ${inviteUser}`}/> : ''}
                <div className="action row">
                    <input type="button" name="leave" value={`Leave ${band.name}`} onClick={() => {leaveBand(band.slug)}}/>
                </div>
            </div>
        </div>
    )
}

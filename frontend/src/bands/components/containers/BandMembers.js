import React from 'react'

export default ({band, searchUser, leaveBand, memberSearch, addMember, inviteUser, invite}) => {
    return (
        <div className="band-members">
            <h6>Members</h6>
            <ul>
                {band.members.map(member => <li key={member.id}>{member.username}</li>)}
            </ul>
            <div>
                <form id='member_search'>
                    <input className="u-full-width" type="text" onChange={(e) => searchUser(e, band.slug)} name="user" id="" placeholder="Search for username or email to add to band"/>
                </form>
                <ul>
                    {memberSearch.map(user => (
                        <li onClick={() => {
                            addMember(band.slug, user.id)
                        }} key={user.id}>Add {user.username}</li>
                    ))}
                </ul>
                {inviteUser ? <input type="button" name="invite" onClick={() => {invite(inviteUser, band.slug)}} value={`Invite ${inviteUser}`}/> : ''}
                <div className="action">
                    <input type="button" name="leave" value={`Leave ${band.name}`} onClick={() => {leaveBand(band.slug)}}/>
                </div>
            </div>
        </div>
    )
}

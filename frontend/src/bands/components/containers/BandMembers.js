import React from 'react'

export default ({band, searchUser, leaveBand, memberSearch, addMember, inviteUser, invite}) => {
    return (
        <div className="band-members columns">
            <h6 className="row">Members</h6>
            <ul className="row">
                {band.members.map(member => <li key={member.id}>{member.username}</li>)}
            </ul>
            <div className="row">
                <form id='member_search' className="row">
                    <input className="columns" type="text" onChange={(e) => searchUser(e, band.slug)} name="user" id="" placeholder="Search for username or email to add to band"/>
                </form>
                <ul className="row">
                    {memberSearch.map(user => (
                        <li onClick={() => {
                            addMember(band.slug, user.id)
                        }} key={user.id}>Add {user.username}</li>
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

import React from 'react'

export default ({band, searchUser, leaveBand, memberSearch}) => {
    return (
        <div className="band-members">
            <h6>Members</h6>
            <ul>
                {band.members.map(member => <li key={member.id}>{member.username}</li>)}
            </ul>
            <div className="edit-show">
                <input className="u-full-width" type="text" onChange={searchUser} name="user" id="" placeholder="Search for username or email to add to band"/>
                <input type="button" name="leave" value={`Leave ${band.name}`} onClick={() => {leaveBand(band.slug)}}/>
                <ul>
                    {memberSearch.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

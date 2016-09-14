import React from 'react'

export default ({band, searchUser}) => {
    return (
        <div className="band-members">
            <h6>Members</h6>
            <ul>
                {band.members.map(member => <li key={member.id}>{member.username}</li>)}
            </ul>
            <div className="edit-show">
                <input className="u-full-width" type="text" onChange={searchUser} name="user" id="" placeholder="Search for username or email to add to band"/>
                {band.members.length > 1 ? <input type="button" name="leave" value={`Leave ${band.name}`}/> : ''}
            </div>
        </div>
    )
}

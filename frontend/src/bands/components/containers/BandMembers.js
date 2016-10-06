import React from 'react'
import Avatar from '../../../profile/components/containers/Avatar'

export default ({band, searchUser, leaveBand, memberSearch, addMember, inviteUser, invite}) => {
    return (
        <div className="band-members columns">
            <h5 className="row">Members</h5>
            <ul className="row members">
                {band.members.map(member => <li className="three columns member" key={member.id}><div className="two columns"><Avatar img={member.avatar}/></div> <div className="ten columns">{member.username}</div></li>)}
            </ul>
            <div className="row invite">
                <form id='member_search' autoComplete="off">
                    <input className="columns" type="text" onChange={(e) => searchUser(e, band.slug)} name="user" id="" placeholder="Search for username or email to add to band"/>
                </form>
                <ul className="row">
                    {memberSearch.map(user => (
                        <li className="three columns member" onClick={() => {
                            addMember(band.slug, user.id)
                        }} key={user.id}> <div className="one column"><i className="fa fa-plus" aria-hidden="true"></i></div><div className="two columns"><Avatar img={user.avatar}/></div> <div className="nine columns">{user.username}</div></li>
                    ))}
                </ul>
                {inviteUser ? <input type="button" name="invite" onClick={() => {invite(inviteUser, band.slug)}} value={`Invite ${inviteUser}`}/> : ''}
            </div>
        </div>
    )
}

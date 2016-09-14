import React from 'react'

const Profile = ({user}) => (
    <div>
        <h3>Who are you {user.username}?</h3>
        <ul>
            <li>{user.username}</li>
            {user.surname ? <li>{user.surname}</li> : ''}
            {user.name ? <li>{user.name}</li>: ''}
            {user.instruments.length ? <li>{user.instruments}</li>: ''}
            {user.avatar ? <li>{user.avatar}</li>: ''}
            <li>{user.email}</li>
        </ul>
    </div>
)

export default Profile

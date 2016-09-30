import React from 'react'
import { Field, reduxForm } from 'redux-form'


export default ({user}) => (
    <div>
        <h2>Who are you {user.username}?</h2>
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

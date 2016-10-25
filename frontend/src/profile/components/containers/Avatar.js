import React from 'react'

export default ({user}) => (
    <div className="avatar-container">
        { user.avatar ? <img src={user.avatar}/> : <img src={`https://placehold.it/200x200?text=${user.username[0]}`}/>}
    </div>
)

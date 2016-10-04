import React from 'react'
import Band from '../../../bands/components/Band'
import ImageUpload from '../ImageUpload'
import EditProfile from '../EditProfile'


const Profile = ({user}) => (
    <div>
        <div>
            <h2>Who are you {user.username}?</h2>
            <ImageUpload/>
            <EditProfile/>
        </div>
        <div>
            <h2>Manage Your Bands</h2>
            <Band/>
        </div>
    </div>
)

export default Profile

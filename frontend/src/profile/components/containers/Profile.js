import React from 'react'
import Band from '../../../bands/components/Band'
import EditProfile from '../EditProfile'


const Profile = ({user}) => (
    <div>
        <div><EditProfile/></div>
        <div>
            <h2>Manage Your Bands</h2>
            <Band/>
        </div>
    </div>
)

export default Profile

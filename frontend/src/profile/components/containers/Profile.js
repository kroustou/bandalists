import React from 'react'
import Band from '../../../bands/components/Band'
import ImageUpload from '../ImageUpload'
import EditProfile from '../EditProfile'


const Profile = ({user, logout}) => (
    <div>
        <a href="" className="u-pull-right" onClick={e=>{
            e.preventDefault()
            logout()
        }}>Logout <i className="fa fa-2x fa-sign-out" aria-hidden="true"></i></a>
        <div>
            <h3>Your Bands</h3>
            <Band/>
        </div>
        <div>
            <h3>Who are you, {user.username}?</h3>
            <ImageUpload/>
            <EditProfile/>
        </div>
    </div>
)

export default Profile
